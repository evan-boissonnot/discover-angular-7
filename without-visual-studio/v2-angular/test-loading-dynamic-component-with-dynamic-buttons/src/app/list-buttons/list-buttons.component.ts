import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Droide } from '../droide';
import { DroideService } from '../droide.service';
import { LandingZonaDirective } from '../landing-zona.directive';
import { state } from '@angular/animations';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.css']
})
export class ListButtonsComponent implements OnInit {
  myDroides: Droide[] = [];
  @ViewChild(LandingZonaDirective, { static: true }) loadingZone: LandingZonaDirective;

  constructor(private _service: DroideService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.myDroides = this._service.getAll();
  }

  loadOneComponent(droide: Droide) {
    // Step 1
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(droide.component);

    // Step 2
    const viewContainerRef = this.loadingZone.viewContainer;
    viewContainerRef.clear();

    // Step 3
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
