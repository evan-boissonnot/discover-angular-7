import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, tap, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { environment } from 'src/environments/environment';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { MessageService } from './message.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService extends BaseService {
  private _apiController = 'heroes';
  private _apiUrl = '';

  constructor(private _httpClient: HttpClient, messageLogger: MessageService) {
    super(messageLogger);

    this._apiUrl = environment.apis.heroes.url + this._apiController;
  }

  getHeroes(): Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(this._apiUrl)
                           .pipe(catchError(this.handleError('getHeroes', [])));
                           // .pipe(tap(result => this._messageLogger.add('Les données sont chargées')));
  }

  getHero(id: number): Observable<Hero> {
    throw new Error('Not implemented');
  }

  addNewHero(hero: Hero): Observable<Hero> {
    throw new Error('Not implemented');
  }

  updateHero(hero: Hero): Observable<Hero> {
    throw new Error('Not implemented');
  }

  deleteHero(id: number): void {
    throw new Error('Not implemented');
  }

  search(content: string): Observable<Hero[]> {
    throw new Error('Not implemented');
  }
}
