import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // browser module car module Racine

import {RouteConfigModule} from './route-config/route-config.module';

import {HighlightDirective} from './highlight.directive';

import {AppComponent} from "./app.component";
import { NotFoundExceptionComponent } from './not-found-exception/not-found-exception.component';
import { ClonesModule } from "./clones/clones.module";


@NgModule({
   imports: [
      BrowserModule, 
      ClonesModule, // declaring before RouteConfig to be sure routes will be ok
      RouteConfigModule // global routes
   ],
   declarations: [
      AppComponent,
      HighlightDirective,
      NotFoundExceptionComponent
   ],
   bootstrap: [
      AppComponent//moduleracineaudémarrage
   ],
   providers: [
       
   ]
})
export class AppModule {

}