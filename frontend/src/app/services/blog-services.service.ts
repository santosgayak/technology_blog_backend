import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { response } from 'express';
import { error } from 'console';
@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {

  private blogPostsSubject = new BehaviorSubject<any[]>([]);
  blogPosts$ =  this.blogPostsSubject.asObservable();

  private apiUrl = 'http://localhost:3000/posts'; 
  
  constructor(private http:HttpClient) { }


  fetchAllBlogs() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        const reversedPosts = response.reverse(); // Reverse to show the latest post first
        this.blogPostsSubject.next(reversedPosts); // Emit to subscribers
        console.log("From Services:",reversedPosts);
      },
      (error) => {
        console.error('Error fetching blog posts:', error);
      }
    );
  }


   // Add a new blog to the database
   addBlog(newBlog: any) {
    this.http.post<any>(this.apiUrl, newBlog).subscribe(
      (response) => {
        const currentBlogs = this.blogPostsSubject.getValue();
        this.blogPostsSubject.next([response, ...currentBlogs]); // Add new blog to the top of the list
      },
      (error) => {
        console.error('Error adding new blog:', error);
      }
    );
  }
}
