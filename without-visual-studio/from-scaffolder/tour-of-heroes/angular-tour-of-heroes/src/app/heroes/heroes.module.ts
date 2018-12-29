import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './hero-list/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAddComponent } from './hero-add/hero-add.component';

import { HeroService } from '../services/hero.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule // Need to call it to be usefull inside all components of this module
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroAddComponent
  ],
  providers: [
    HeroService
  ],
  exports: [
    HeroesComponent // export this component allows the appmodule and app html to know the <app-heroes></app-heroes>
  ]
})
export class HeroesModule { }
