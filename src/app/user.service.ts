import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject } from 'rxjs'; // Import BehaviorSubject

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null); // Initialize with null
  user:any;
  constructor(private http:HttpClient) { 
      // Retrieve user data from sessionStorage if available
      const userData = sessionStorage.getItem('user');
      if (userData) {
        this.userSubject.next(JSON.parse(userData)); // Set user if present in session
      }
  }

  getUser() {
    return this.userSubject.asObservable();  // Return observable of the user data
  }

  setUser(user: any) {
    this.userSubject.next(user);
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user)); // Persist user in sessionStorage
    } else {
      sessionStorage.removeItem('user'); // Remove user data from sessionStorage if logging out
    }
  }
  fetchUserFromSession(){
    this.http.get('http://localhost:3000/session').subscribe({
      next:(user: any)=>{
       this.setUser(user);
        console.log("new user set: ",this.getUser());
      },
      error: (err)=>{
        console.error('Error fetching session data:',err)
      }
    })
  }
}
