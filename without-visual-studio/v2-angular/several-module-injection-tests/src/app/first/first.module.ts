import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1FirstComponent } from './c1-first/c1-first.component';



@NgModule({
  declarations: [
    C1FirstComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    C1FirstComponent
  ]
})
export class FirstModule { }
