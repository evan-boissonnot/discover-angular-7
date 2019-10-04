import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test04InsideModuleInsideModule } from '../services/test04-inside-module-inside-module';
import { ThirdModule } from '../third/third.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThirdModule
  ],
  providers: [
    Test04InsideModuleInsideModule
  ]
})
export class SecondModule { }
