import { Component, OnInit, OnDestroy } from '@angular/core';

import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';
import { HeroService } from '../../services/hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;

  private _getHeroesObservable: Subscription;

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this._getHeroesObservable.unsubscribe();
  }

  getHeroes(): void {
    this._getHeroesObservable = this._heroService.getHeroes().subscribe(heroesList => this.heroes = heroesList);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  receiptHeroAdded(hero: Hero): void {
    this.heroes.push(hero);
  }

}
