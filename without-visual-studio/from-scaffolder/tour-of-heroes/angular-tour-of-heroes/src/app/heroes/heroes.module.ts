import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './hero-list/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAddComponent } from './hero-add/hero-add.component';

import { HeroService } from '../services/hero.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
