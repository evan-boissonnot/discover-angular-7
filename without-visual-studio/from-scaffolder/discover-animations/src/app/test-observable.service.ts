import { Injectable } from '@angular/core';
import { Observable, of, empty, EMPTY } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestObservableService {

  constructor() {

  }

  testEmpty(): Observable <any> {
    // return of(); // ne fonctionne pas car on ne ramène pas
    console.log('testEmpty');
    // return EMPTY; // ne renvoie rien, http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-empty
    // return EMPTY.pipe(finalize(console.log('finalize')));, fonctionne mais ne déclenche pas le success
    return of(undefined);
  }
}
