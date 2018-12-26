import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { environment } from 'src/environments/environment';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _apiController = 'heroes';

  constructor(private _messageLogger: MessageService,
              private _httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(environment.apis.heroes.url + this._apiController);
                           //.pipe(tap(result => this._messageLogger.add('Les données sont chargées')));
  }
}
