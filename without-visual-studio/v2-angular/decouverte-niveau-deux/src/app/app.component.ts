import { Component } from '@angular/core';
import { Wookie } from './wookie';
import { Family } from './family';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion des Wookies';
  subtitle = 'Naissance des jeunes Wookies';
  displayImage = true;
  wookies: Array<Wookie> = [];
  constructor() {
    const family2 = new Family('Rebel');
    this.wookies.push(<Wookie>{ lastName: 'chou', family: { familyName: 'test' } });
    this.wookies.push(new Wookie('Chewi', family2));
    this.wookies.push(new Wookie('gum', family2));
    this.wookies.push(new Wookie('Menthe', family2));
  }

  showImage() {
    this.displayImage = !this.displayImage;
  }

  get btnTitle(): string {
    return (this.displayImage) ? 'hide' : 'show';
  }
  get value(): string {
    return ' test';
  }
}
