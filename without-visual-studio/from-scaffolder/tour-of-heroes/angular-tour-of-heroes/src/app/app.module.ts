import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { HeroesModule } from './heroes/heroes.module';
//import { LoaderComponent } from './loader/loader.component';

@NgModule({
   declarations: [
      AppComponent,
      MessageComponent,
      //LoaderComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      //allowyoutouseforexample[(ngModel)=\\\r\n
      HttpClientModule,
      //alwaysafterBrowserModule,
      HeroesModule
   ],
   providers: [
      MessageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
