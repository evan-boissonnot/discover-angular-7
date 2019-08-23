import { Injectable } from '@angular/core';
import { People } from './People';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private _client: HttpClient) { }

  getAll(): Observable<People[]> {
    console.log('getAll');

   return this._client.get<Result<People>>('https://swapi.co/api/people')
                .pipe(map(item => {
                  return item.results;
                }));
  }
}
