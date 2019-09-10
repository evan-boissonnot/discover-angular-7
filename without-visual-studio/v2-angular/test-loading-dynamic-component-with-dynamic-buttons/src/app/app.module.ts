import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingZonaDirective } from './landing-zona.directive';
import { ListButtonsComponent } from './list-buttons/list-buttons.component';
import { DroideService } from './droide.service';
import { UnComposantDynamicComponent } from './un-composant-dynamic/un-composant-dynamic.component';
import { DeuxComposantDynamicComponent } from './deux-composant-dynamic/deux-composant-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingZonaDirective,
    ListButtonsComponent,
    UnComposantDynamicComponent,
    DeuxComposantDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DroideService
  ],
  entryComponents: [
    UnComposantDynamicComponent,
    DeuxComposantDynamicComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
