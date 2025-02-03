import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Import UserService

import { FormsModule } from '@angular/forms';    // Import FormsModule
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-navbar',
  imports:[CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
searchQuery: any;
onSearchSubmit() {
throw new Error('Method not implemented.');
}
  @Input() isVisible: boolean = false;
  @Output() toggleForm = new EventEmitter<void>(); 
  @Output() goToBlogs = new EventEmitter<void>();

  user: any; // Store user information here
  constructor(
    private router: Router,
    private userService: UserService, // Inject UserService to access user data
    private http: HttpClient // Inject HttpClient to make HTTP requests
  ) {

  }
  ngOnInit() {
    // Subscribe to the user observable and update `user` whenever it changes
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      console.log("User in Navbar:", this.user);
    });
  }
  


  goToBlogsClick(): void {
    this.goToBlogs.emit(); // Emit event to parent
  }


  onCreatePostClick() {
    this.toggleForm.emit(); // Emit event to toggle form visibility in AppComponent
  }

  navigateToFullPost(postId: string): void {
    this.router.navigate(['/fullBlogPost'], { queryParams: { id: postId } });
    console.log(postId);
  }

  navigateToGetStarted() {
    console.log("Get Started Called");
    this.router.navigate(['/getStarted']);
  }

  // Method to log out (optional, depending on your requirements)
  logout() {
    this.userService.setUser(null); // Reset user data
    this.router.navigate(['/']); // Navigate to home or login page
  }
}
