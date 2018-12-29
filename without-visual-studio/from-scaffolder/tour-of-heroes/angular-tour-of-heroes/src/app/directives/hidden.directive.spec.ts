import { HiddenDirective } from './hidden.directive';
import { ElementRef, Renderer } from '@angular/core';

describe('HiddenDirective', () => {
  it('should create an instance', () => {
    const nativeElement: any = null;
    const el: ElementRef = new ElementRef(nativeElement);
    const renderer: Renderer = null;

    const directive = new HiddenDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
