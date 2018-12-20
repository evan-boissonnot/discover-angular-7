import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoreDetailCloneComponent } from '../clones/more-detail-clone.component';
import { CloneListComponent } from '../clones/clone-list/clone-list.component';

const routes: Routes = [
    { path: 'clones', component: CloneListComponent},
    { path: 'clone/:id', component: MoreDetailCloneComponent}, // no slash to start url
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // forChild because childs routes
    exports: [RouterModule]
})
export class ClonesRouteConfigModule {}
