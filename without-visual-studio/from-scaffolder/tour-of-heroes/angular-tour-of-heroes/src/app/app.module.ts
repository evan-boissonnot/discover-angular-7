import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { HeroAddComponent } from './hero-add/hero-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    HeroAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // allow you to use for example [(ngModel)]=""
    HttpClientModule // always after BrowserModule
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
