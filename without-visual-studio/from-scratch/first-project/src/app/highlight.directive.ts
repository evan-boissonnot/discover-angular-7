import { ElementRef, Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // app{name} to stop confusing between this selector and a true css selector, don't use ng{name} !
})
export class HighlightDirective {
  @Input() // if we need to change the name @Input('newName')
  borderColor: string;

  constructor(private _element: ElementRef) { 
    this.updateStyle(this._element);
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this._element.nativeElement.style.border = "solid 2px " + this.borderColor;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this._element.nativeElement.style.border = "inherit";
  }

  updateStyle(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }
}
