import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyNotEnabledDirective } from '../directives/empty-not-enabled.directive';
import { HiddenDirective } from '../directives/hidden.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmptyNotEnabledDirective,
    HiddenDirective
  ],
  exports: [
    EmptyNotEnabledDirective,
    HiddenDirective
  ]
})
export class SharedModule { }
