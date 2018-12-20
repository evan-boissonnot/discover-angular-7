import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundExceptionComponent } from '../not-found-exception/not-found-exception.component';

const routes: Routes = [
  { path: '', redirectTo: 'clones', pathMatch: 'full' },
  { path: '**', component: NotFoundExceptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // need to export to be used by AppModule !
})
export class RouteConfigModule {
}


