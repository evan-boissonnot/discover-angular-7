import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { TestRoutes } from './test.routing';
import { PeopleOneComponent } from './people-one/people-one.component';
import { EditOnePeopleComponent } from './edit-one-people/edit-one-people.component';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
   declarations: [
      AppComponent,
      PeopleComponent,
      PeopleOneComponent,
      EditOnePeopleComponent,
      ExponentialStrengthPipe
   ],
   imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      TestRoutes
   ],
   providers: [
      PeopleService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
