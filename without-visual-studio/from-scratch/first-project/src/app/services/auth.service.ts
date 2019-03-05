import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators/delay'; //https://stackoverflow.com/questions/48826799/rxjs-observable-of-delay-is-not-a-function
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";


@Injectable()
export class AuthService {
  private _isLogged: boolean = false;
  private _redirectUrl: string = '';

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    let isOk: boolean = login === 'administrator' && password === 'P4ss0rd!';

    return Observable.of(isOk).delay(1000).do(value => this._isLogged = value);
  }

  logout(): void {
    this._isLogged = false;
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
}
