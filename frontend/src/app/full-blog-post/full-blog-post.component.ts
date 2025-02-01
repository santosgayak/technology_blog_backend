import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service'; // Import UserService
import { response } from 'express';
import { error } from 'console';
import { ppid } from 'process';


@Component({
  selector: 'app-full-blog-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './full-blog-post.component.html',
  styleUrls: ['./full-blog-post.component.css']
})
export class FullBlogPostComponent implements OnInit {



  postId: any | undefined;
  blogPost: any;
  blogComments: any[] = []; 
  newCommentContent: string = ''; 

  constructor(private route: ActivatedRoute, private http: HttpClient,private userService:UserService) {}
  isVisible = false;
  toggle(){
    this.isVisible = !this.isVisible;

  }
  ngOnInit(): void {
    // Get the post ID from the query parameters
    this.route.queryParams.subscribe((params: any) => {
      console.log("Query Parameters:", params);
      this.postId = params.id; // Access the 'id' parameter
      console.log("Extracted Post ID:", this.postId);
  
      if (this.postId) {
        this.fetchPostWithMatchingId(this.postId);
      } else {
        console.error("Post ID is undefined. Please check the query parameter.");
      }
    });
  }



  addComment() {
    if (this.newCommentContent.trim()) {
      this.userService.getUser().subscribe(user => {
        const newComment = {
          content: this.newCommentContent,
          authorName: user?.firstName || 'Annonymous user',  // Get the user's name from the observable
          upvotes: 0, // Default to 0 upvotes
        };
  
        // Send the new comment to the backend
        this.http.post('http://localhost:3000/comments/add', {
          postId: this.blogPost.id, // Use _id instead of id to match MongoDB
          comment: newComment
        }).subscribe(
          (response: any) => {
            // If the comment is saved successfully, add it to the local comments array
            this.blogComments.push(newComment);
            this.blogComments.reverse();
            this.newCommentContent = ''; // Clear the input field
            this.toggle();
            console.log('Comment added successfully', response);
          },
          (error) => {
            console.error('Error saving comment:', error);
            alert('There was an error while adding the comment. Please try again.');
          }
        );
      });
    } else {
      alert('Please type a comment.');
    }
  }
  
  
  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/blog_poster.jpg'; 
  }

  fetchPostWithMatchingId(postId: any): void {
    console.log('Fetching post with ID:', postId);
    this.http.get<any>(`http://localhost:3000/posts/${postId}`).subscribe(
      (response) => {
        this.blogPost = response;
        this.blogComments = response.comments;
        this.blogComments.reverse();
        console.log("Fetch coments: ",this.blogComments);
        console.log('Fetched Blog Post:', this.blogPost);
      },
      (error) => {
        console.error('Error fetching blog post:', error);
      }
    );
  }


  addCommentLike(postId: any, commentId: any) {
    console.log("ID: ",postId);
    this.http.post<any>(`http://localhost:3000/addLikes/${postId}/${commentId}`, {}).subscribe(
      (response)=>{
        const updatedComment = this.blogComments.find(comment => comment._id === commentId);
        if (updatedComment) {
          updatedComment.upvotes += 1; // Increment the upvotes locally
        }
      },
      (error) => {
        console.error("Error adding like.",error);
      }

    );

  }
  addBlogLikes(postId: string) {  
    this.http.post<any>(`http://localhost:3000/addLikes/${postId}`, {}).subscribe(
      (response) => {
        if (response.post) {
          this.blogPost.likes = response.post.likes; 
        } else {
          console.warn("No post found in response.");
        }
      },
      (error) => {
        console.error("Error adding like.", error);
      }
    );
  }
  
  
}
