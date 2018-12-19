import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // browser module car module Racine

import {AppComponent} from "./app.component";
import { HighlightDirective } from './highlight.directive';

@NgModule({
   imports: [
      BrowserModule
   ],
   declarations: [
      AppComponent,
      HighlightDirective
   ],
   bootstrap: [
      AppComponent//moduleracineaudémarrage
   ]
})
export class AppModule {

}