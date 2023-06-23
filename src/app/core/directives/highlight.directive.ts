import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red', 'black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', 'white');
  }

  private highlight(bgColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.innerHTML = 'This is a test modifing other atribute';
  }
}
