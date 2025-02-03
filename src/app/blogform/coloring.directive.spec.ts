import { ElementRef } from '@angular/core';
import { ColoringDirective } from './coloring.directive';

describe('ColoringDirective', () => {
  it('should create an instance', () => {
    const elementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new ColoringDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
