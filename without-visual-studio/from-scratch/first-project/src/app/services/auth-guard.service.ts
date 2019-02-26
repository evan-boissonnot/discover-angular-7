
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() { }

  canActivate(): boolean {
    console.log("Activate ?");

    return true;
  }
}
