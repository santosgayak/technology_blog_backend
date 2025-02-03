import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appFormSubmit]'
})
export class FormSubmitDirective {
  @Input() formGroup: FormGroup | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('submit', ['$event'])
  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.formGroup?.valid) {
      // Handle the submission logic here
      console.log('Form submitted with values:', this.formGroup.value);
      // You can call a method or service here for further processing.
    } else {
      console.log('Form is invalid.');
    }
  }
}
