import { HttpClient } from '@angular/common/http';
import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { response } from 'express';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-post',
  imports: [CommonModule, HttpClientModule, RouterModule], // Add CommonModule to imports array
  templateUrl: './featured-post.component.html',
  styleUrl: './featured-post.component.css'
})
export class FeaturedPostComponent {
  @Input() blogPosts: any[] = [];

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.fetchFeaturedBlogPosts();
  }
  navigateToFullBlogPost(postId: string): void {
    this.router.navigate(['/fullBlogPost'], { queryParams:{id:postId}});
    console.log(postId);
  }
  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/blog_poster.jpg'; 
  }
  fetchFeaturedBlogPosts() {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(
      (response) => {
        this.blogPosts = response.reverse().slice(0, 3);
        console.log('Fetched blog posts:', this.blogPosts);
      },
      (error) => {
        console.error('Error fetching blog posts:', error);
      }
    );
  }
  getFirstThreeTags(htmlContent: string): string {
    if (!htmlContent) return '';
  
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
  
    let output = '';
    let count = 0;
  
    Array.from(div.childNodes).forEach((node) => {
      if (count < 1 && node.nodeType === 1) { // Only include element nodes
        const firstElement = node as HTMLElement;
        const textContent = firstElement.textContent?.trim() || '';
        const words = textContent.split(/\s+/).slice(0,20).join(' ') + '...'; 
        firstElement.textContent = words; 
        output += firstElement.outerHTML;
        count++;
      }
      return;

    });
  
    return output;
  }


 
  
  
}