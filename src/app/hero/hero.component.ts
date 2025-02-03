import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  imports: [CommonModule,FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Output() startReading = new EventEmitter<void>();

  subscribeEmail:any
  isVisible = false;
  constructor(private http: HttpClient){}
  toggle(){
    this.isVisible = !this.isVisible;

  }


  onStartReadingClick(): void {
    this.startReading.emit(); // Emit event to parent
  }
  onSubmit() {
    if(!this.subscribeEmail || !this.isValidEmail(this.subscribeEmail)){
      console.log("Enter valid a email address.")
    }else{
      this.http.post<any>('http://localhost:3000/subscribe',{email:this.subscribeEmail}).subscribe(
        (response) => {
          alert('Thank you for subscribing!');

          console.log('Subscribing successfull!');
          this.subscribeEmail='';
        },
        (error) => {
          console.error('Error Subscribing', error);
          alert('There was an error subscribing. Please try again later.');

        }
      );

    }
  };
    
    // Helper method to validate email format
private isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

}
