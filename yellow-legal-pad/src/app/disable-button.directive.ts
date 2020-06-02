import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableButton]'
})
export class DisableButtonDirective {

  constructor(element: ElementRef) {
      element.nativeElement.disabled = 'disabled';

  }

}
