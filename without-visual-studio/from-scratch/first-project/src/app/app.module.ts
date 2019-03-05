import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // browser module car module Racine

import {RouteConfigModule} from './route-config/route-config.module';

import {HighlightDirective} from './highlight.directive';

import {AppComponent} from "./app.component";
import { NotFoundExceptionComponent } from './not-found-exception/not-found-exception.component';
import { ClonesModule } from "./clones/clones.module";
import { LoaderComponent } from './loader/loader.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';


@NgModule({
   imports: [
      BrowserModule,
      ClonesModule,
      //declaringbeforeRouteConfigtobesurerouteswillbeok\\r\\n
      RouteConfigModule//globalroutes
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
      AuthService,
      AuthGuardService
   ]
})
export class AppModule {

}