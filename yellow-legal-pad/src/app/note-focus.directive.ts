import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNoteFocus]'
})
export class NoteFocusDirective {

  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.boxShadow = '3px 3px 5px 6px #ccc';
   }
   @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.boxShadow = '';
   }

}
