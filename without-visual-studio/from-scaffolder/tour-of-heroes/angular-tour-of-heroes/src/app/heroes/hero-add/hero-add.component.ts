import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { debug } from 'util';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit, OnDestroy {
  hero: Hero;
  @Output() heroAdded = new EventEmitter<Hero>();

  private _addNewHeroObservable: Subscription;

  constructor(private _service: HeroService) { }

  ngOnInit() {
    this.hero = new Hero();
  }

  ngOnDestroy(): void {
    this._addNewHeroObservable.unsubscribe();
  }

  add(): void {
    console.log('hero new  ? ' + this.hero.name);
    this._addNewHeroObservable = this._service.addNewHero(this.hero).subscribe(hero => {
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
