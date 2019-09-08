import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureModule } from './feature/feature.module';


const routes: Routes = [
  {
    path: 'feature-sans-ivy',
    loadChildren: './feature/feature.module#FeatureModule'
  },
  {
    path: 'feature-avec-ivy',
    loadChildren: () => import('./feature/feature.module').then(({ FeatureModule }) => FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
