import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero): void {
    console.log('====> selecting');
    console.log(hero);

    this.selectedHero = hero;
  }

}
