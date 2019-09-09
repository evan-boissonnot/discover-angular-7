import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDirective } from './add.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { OneAddComponent } from './one-add/one-add.component';
import { TwoAddComponent } from './two-add/two-add.component';
import { AddService } from './add.service';

@NgModule({
  declarations: [
    AppComponent,
    AddDirective,
    AdBannerComponent,
    OneAddComponent,
    TwoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    OneAddComponent,
    TwoAddComponent
  ],
  providers: [
    AddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
