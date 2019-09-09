import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AddDirective } from '../add.directive';
import { AddItem } from '../add-item';
import { AddComponent } from '../add-component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input  () ads: AddItem[];
  currentAdIndex = -1;
  // https://stackoverflow.com/questions/56359504/how-should-i-use-the-new-static-option-for-viewchild-in-angular-8
  @ViewChild(AddDirective, { static: true}) adHost: AddDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    if (adItem) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as AddComponent).data = adItem.data;
    }
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
