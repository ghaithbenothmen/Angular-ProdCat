import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

    
    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.classList.add('highlight');
    }
  
   
    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.classList.remove('highlight');
    }
}
