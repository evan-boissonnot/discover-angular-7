import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { Test02WithoutInjectable } from './services/test02-without-injectable';
import { FourthModule } from './fourth/fourth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    FourthModule
  ],
  providers: [
    Test02WithoutInjectable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
