import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { response } from 'express';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BlogServicesService } from '../services/blog-services.service'

import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule,FormsModule], // Add CommonModule to imports array
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css'],
})
export class BlogPostComponent {

 
  @Input() blogPosts: any[] = []; // Receive the list of blog posts
  filteredBlogPosts: any[] = []; // Array to store search results

  inputHtml: string = "";
  h2: string | null = null;
  img: string | null = null;
  third: string | null = null;
  
  constructor(private blogService: BlogServicesService, private http: HttpClient , private router:Router) {
    this.filteredBlogPosts = [...this.blogPosts];
  } 
  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/blog_poster.jpg'; 
  }
  ngOnInit() {
    this.blogService.blogPosts$.subscribe((posts) => {
      this.blogPosts = posts; 
      this.filteredBlogPosts = [...this.blogPosts]; // Update filteredBlogPosts to display the initial posts

      console.log("Updated BLOGSS: ", this.blogPosts);
    });
    this.fetchBlogPosts();
  }

  fetchBlogPosts() {
    // Call the service to fetch blogs
    this.blogService.fetchAllBlogs();
  }


  navigateToFullPost(postId: string): void {
    this.router.navigate(['/fullBlogPost'], { queryParams:{id:postId}});
    console.log(postId);
  }

  searchKeyWords: string = '';

  searchBlogs(){
   this.http.get<any>('http://localhost:3000/searchBlogs', { params: { keywords: this.searchKeyWords } }).subscribe(
        (response) => {
          console.log('Search successful!');
          console.log('Blogs:', response.blogs);
          this.blogPosts=response.blogs;
          this.searchKeyWords= '';

        },
        (error) => {
          this.searchKeyWords= '';

           // Check if the error status is 404 (No matches found)
            if (error.status === 404 && error.error.message === 'No blogs found matching the keywords') {
              alert('No blogs found matching your search keywords. Please try different keywords.');
            } else {
              console.error('Error Searching:', error);
              alert('There was an error Searching. Please try again later.');
            }
          }
      );
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchKeyWords = target.value;
      this.filterBlogPosts();
    }
  }

  filterBlogPosts() {
    const keywords = this.searchKeyWords.toLowerCase();
    this.filteredBlogPosts = this.blogPosts.filter((post) =>
      post.blogTitle.toLowerCase().includes(keywords)
    );
  }
  
  
  filterbasedOnCategory(keywords: string) {
    // Convert keywords to uppercase to match the capitalized categories
    const upperCaseKeywords = keywords.toUpperCase();
    // Filter blog posts based on category
    this.filteredBlogPosts = this.blogPosts.filter((post) => 
      post.category.toUpperCase().includes(upperCaseKeywords)
    );
  }


  
  

}

