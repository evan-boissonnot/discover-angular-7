import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
];

export const TestRoutes = RouterModule.forChild(routes);
