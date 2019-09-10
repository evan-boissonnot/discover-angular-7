import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLandingZona]'
})
export class LandingZonaDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
