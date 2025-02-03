import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColoring]' // You apply this directive via the `appColoring` selector
})
export class ColoringDirective implements OnInit {
  @Input() appColoring: string = 'red'; // Default value is 'red'

  constructor(private element: ElementRef) {} // Inject ElementRef to access the DOM element

  ngOnInit() {
    // Apply the background color to the element
    this.element.nativeElement.style.color = this.appColoring;
  }
}
