import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CloneListComponent } from './clone-list/clone-list.component';
import { MoreDetailCloneComponent } from './more-detail-clone.component';
import { ClonesRouteConfigModule } from './clones-route-config.module';
import { CloneService } from '../services/clone-service';
import { CloneFormComponent } from './clone-form/clone-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClonesRouteConfigModule
  ],
  declarations: [
    CloneListComponent,
    MoreDetailCloneComponent,
    CloneFormComponent
  ],
  providers: [
    CloneService
  ]
})
export class ClonesModule { }
