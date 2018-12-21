import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(heroesList => this.heroes = heroesList);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
