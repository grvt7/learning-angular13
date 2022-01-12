import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(element : ElementRef) { 
    element.nativeElement.style.color = "red";
  }

}
