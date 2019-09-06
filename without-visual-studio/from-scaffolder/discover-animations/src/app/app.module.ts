import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstAnimationComponent } from './first-animation/first-animation.component';
import { FirstAnimationWithWildCardComponent } from './first-animation-with-wildcard/first-animation.component';
import { EnterLeavingAnimationComponent } from './enter-leaving-animation/enter-leaving-animation.component';
import { NgIfAnimationEnterLeaveAnimationComponent } from './ng-if-animation-enter-leave-animation/ng-if-animation-enter-leave-animation.component';
import { DisabledAnimationComponent } from './disabled-animation/disabled-animation.component';
import { KeyframeAnimationComponent } from './keyframe-animation/keyframe-animation.component';
import { QueryAndStaggerComponent } from './query-and-stagger/query-and-stagger.component';

@NgModule({
   declarations: [
      AppComponent,
      FirstAnimationComponent,
      FirstAnimationWithWildCardComponent,
      EnterLeavingAnimationComponent,
      NgIfAnimationEnterLeaveAnimationComponent,
      DisabledAnimationComponent,
      KeyframeAnimationComponent,
      QueryAndStaggerComponent
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
