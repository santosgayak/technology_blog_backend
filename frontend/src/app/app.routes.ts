import { Routes } from '@angular/router';
import { FullBlogPostComponent } from './full-blog-post/full-blog-post.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';    
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component: FeaturedPostComponent }, // Default route for '/'
  { path: 'featuredPost', component: FeaturedPostComponent },
  { path: 'fullBlogPost', component: FullBlogPostComponent },
  { path: 'getStarted', component: SignupComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, 

];
