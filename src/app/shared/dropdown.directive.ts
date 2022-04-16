import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    if(this.isOpen)
      this.isOpen = false;
    else 
      this.isOpen = true;
    let part = this.el.nativeElement.querySelector('.dropdown-menu');
    if(this.isOpen)
      this.renderer.addClass(part, 'show');
    else
      this.renderer.removeClass(part, 'show');
  }

}
