import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloneListComponent } from './clone-list/clone-list.component';
import { MoreDetailCloneComponent } from './more-detail-clone.component';
import { ClonesRouteConfigModule } from './clones-route-config.module';
import { CloneService } from '../services/clone-service';

@NgModule({
  imports: [
    CommonModule,
    ClonesRouteConfigModule
  ],
  declarations: [
    CloneListComponent,
    MoreDetailCloneComponent
  ],
  providers: [
    CloneService
  ]
})
export class ClonesModule { }
