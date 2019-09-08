import { Component } from '@angular/core';
import { OneFeatureComponent } from './feature/one-feature/one-feature.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discover-ivy-lazy-loading';

  loadComponent() {
    console.log('click');
    // tslint:disable-next-line:no-shadowed-variable
    import('./feature/one-feature/one-feature.component').then(({ OneFeatureComponent }) => OneFeatureComponent);
  }
}
