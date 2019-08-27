import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstAnimationComponent } from './first-animation/first-animation.component';
import { FirstAnimationWithWildCardComponent } from './first-animation-with-wildcard/first-animation.component';
import { EnterLeavingAnimationComponent } from './enter-leaving-animation/enter-leaving-animation.component';

@NgModule({
   declarations: [
      AppComponent,
      FirstAnimationComponent,
      FirstAnimationWithWildCardComponent,
      EnterLeavingAnimationComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
