import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { debug } from 'util';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {
  hero: Hero;
  @Output() heroAdded = new EventEmitter<Hero>();

  constructor(private _service: HeroService) { }

  ngOnInit() {
    this.hero = new Hero();
  }

  add(): void {
    console.log('hero new  ? ' + this.hero.name);
    this._service.addNewHero(this.hero).subscribe(hero => {
      console.log(this.heroAdded);
      this.empty();
      this.heroAdded.emit(hero);
    });
  }

  private empty(): void {
    this.hero.id = 0;
    this.hero.name = '';
  }
}
