import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test05InsideThirdModuleService } from '../services/test05-inside-third-module.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Test05InsideThirdModuleService
  ]
})
export class ThirdModule { }
