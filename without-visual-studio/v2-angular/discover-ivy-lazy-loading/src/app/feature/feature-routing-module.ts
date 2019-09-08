import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneFeatureComponent } from './one-feature/one-feature.component';


const routes: Routes = [
  {
    path: '',
    component: OneFeatureComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // > [RouterModule.forRoot(routes)] : for main Root
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
