import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // browser module car module Racine

import {RouteConfigModule} from './route-config/route-config.module';

import {HighlightDirective} from './highlight.directive';

import {AppComponent} from "./app.component";
import { NotFoundExceptionComponent } from './not-found-exception/not-found-exception.component';
import { ClonesModule } from "./clones/clones.module";
import { LoaderComponent } from './loader/loader.component';


@NgModule({
   imports: [
      BrowserModule,
      ClonesModule,
      //declaringbeforeRouteConfigtobesurerouteswillbeok\\r\\nRouteConfigModule//globalroutes
   ],
   declarations: [
      AppComponent,
      HighlightDirective,
      NotFoundExceptionComponent,
      LoaderComponent
   ],
   bootstrap: [
      AppComponent//moduleracineaudémarrage
   ],
   providers: []
})
export class AppModule {

}