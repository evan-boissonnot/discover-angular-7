import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1FirstComponent } from './c1-first/c1-first.component';
import { Test03InsideChildModule } from '../services/test03-inside-child-module';
import { SecondModule } from '../second/second.module';



@NgModule({
  declarations: [
    C1FirstComponent
  ],
  imports: [
    CommonModule,
    SecondModule
  ],
  exports: [
    C1FirstComponent
  ],
  providers: [
    Test03InsideChildModule
  ]
})
export class FirstModule { }
