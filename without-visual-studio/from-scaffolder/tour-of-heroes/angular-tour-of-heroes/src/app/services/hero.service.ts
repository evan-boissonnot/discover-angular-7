import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _messageLogger: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this._messageLogger.add('Chargement des Héros');
    return of(HEROES);
  }
}
