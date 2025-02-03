import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { UserService } from '../user.service'; // Import the UserService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']  // Corrected styleUrl to styleUrls
})
export class SignupComponent {

  isSignUp = true;
  isComplete = false;
  user: any = {};

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  // Models to bind with the form inputs
  signUpModel = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    email: '',
    unHashedPassword: '',
    confirmPassword: '',
    subscribe:false,
    terms: false
  };

  signInModel = {
    email: '',
    password: '',
    terms: false
  };

  // Toggle between Sign Up and Sign In forms
  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }

  // Handle form submission for Sign Up
  onSubmitSignUpForm(signUpForm: any) {
    if (signUpForm.valid) {
      console.log('Sign Up Data:', this.signUpModel);

      this.http.post('http://localhost:3000/save-user', this.signUpModel).subscribe(
        (response: any) => {
          console.log('User saved successfully:', response);
          this.isComplete = true;
          this.toggleForm();
          
          // Store the user in the UserService after successful sign-up
          this.userService.setUser(response.user);
        },
        (error) => {
          console.error('Error saving user:', error);
        }
      );

    } else {
      console.log('Form is invalid!');
    }
  }
  onSubmitSignInForm(form: any) {
    if (form.valid) {
      this.http.post('http://localhost:3000/signIn-user', this.signInModel).subscribe(
        (response: any) => {
          console.log('User logged in successfully:', response);
          this.userService.setUser(response.user);  // Store the user data in the service after login
          this.isComplete=true;
        },
        (error) => {
          console.error('Error logging in:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
