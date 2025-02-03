import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { FeaturedPostComponent } from "./featured-post/featured-post.component";
import { BlogPostComponent } from './blogpost/blogpost.component';
import { BlogpaginationComponent } from './blogpagination/blogpagination.component';
import { FooterComponent } from './footer/footer.component';
import { BlogformComponent } from "./blogform/blogform.component";
import { SignupComponent } from './signup/signup.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { FullBlogPostComponent } from './full-blog-post/full-blog-post.component';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    RouterOutlet,
    BlogformComponent,
    HeroComponent,
    FeaturedPostComponent,
    BlogPostComponent,
    BlogpaginationComponent,
    FullBlogPostComponent,
    SignupComponent,
    FooterComponent,
    RouterModule,
    HttpClientModule
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isFullBlogPostRoute = false; // Flag to check if we are on the full blog post page
  isVisible = false; // Toggle for the form
  blogPosts: any[] = [];
  isGetStarted = false;
  user: any = null; // Ensure user is initially null
  @ViewChild('blogPostSection') blogPostSection!: ElementRef;



  constructor(private router: Router, private userService: UserService) {}

  ngAfterViewInit(): void {
    // Ensure that the reference is initialized after the view is fully loaded.
    if (!this.blogPostSection) {
      console.warn('blogPostSection is not defined.');
    }
  }

  ngOnInit(): void {
    // Subscribe to the user observable and update `user` whenever it changes
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      console.log("User in appcomponent:", this.user);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isFullBlogPostRoute = event.url.includes('/fullBlogPost');
        this.isGetStarted = event.url.includes('/getStarted');
      }
    });
  }

  toggleFormVisibility() {
    this.isVisible = !this.isVisible;
  }

  handleFormSubmit(post: any) {
    console.log('Form Submitted:', post);
    this.blogPosts.push(post);
    this.toggleFormVisibility();
  }

  title = 'myBlogs';

  scrollToBlogPost(): void {
    setTimeout(() => {
      if (this.blogPostSection) {
        this.blogPostSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('blogPostSection is not available.');
      }
    }, 0);
  }

  onStartReading() {
    this.scrollToBlogPost();
  }

}