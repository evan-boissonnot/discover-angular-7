import { Component } from '@angular/core';
import { Test03InsideChildModule } from './services/test03-inside-child-module';
import { Test04InsideModuleInsideModule } from './services/test04-inside-module-inside-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'several-module-injection-tests';

  constructor(private service03: Test03InsideChildModule, private service04: Test04InsideModuleInsideModule) {
    console.log('03', this.service03);
    console.log('04', this.service04);
  }
}
