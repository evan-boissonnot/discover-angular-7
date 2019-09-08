import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { FeatureRoutingModule } from './feature-routing-module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [
    OneFeatureComponent
  ]
})
export class FeatureModule { }
