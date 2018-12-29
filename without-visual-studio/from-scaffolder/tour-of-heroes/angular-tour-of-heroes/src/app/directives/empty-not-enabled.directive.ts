import { Directive, Input, ElementRef, HostListener, Renderer, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEmptyNotEnabled]'
})
export class EmptyNotEnabledDirective implements AfterViewInit {
  @Input() linkButton: ElementRef;

  constructor(private _element: ElementRef, public renderer: Renderer2) {
    console.log('init');
  }

  @HostListener('keyup')
  onKeyUp($event): void {
     // console.log(this.linkButton);
     const text: string = this._element.nativeElement.value.trim();

     if (text === '') {
      this.renderer.addClass(this.linkButton, 'disabled');
     } else {
       this.renderer.removeClass(this.linkButton, 'disabled');
     }
  }

  ngAfterViewInit(): void {
    this.renderer.addClass(this.linkButton, 'disabled');
  }

}
