import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoreDetailCloneComponent } from '../clones/more-detail-clone.component';
import { CloneListComponent } from '../clones/clone-list/clone-list.component';
import { CloneEditComponent } from './clone-edit/clone-edit.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
    { path: 'clones', component: CloneListComponent },
    { path: 'clone/edition/:id', component: CloneEditComponent, canActivate: [AuthGuardService] },
    { path: 'clone/:id', component: MoreDetailCloneComponent }, // no slash to start url
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // forChild because childs routes
    exports: [RouterModule]
})
export class ClonesRouteConfigModule {}
