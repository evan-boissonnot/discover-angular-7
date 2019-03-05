
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _authenticateService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Activate ?");
    let isLogged: boolean = false;
    let url: string = state.url;

    isLogged = this._authenticateService.isLogged;
    if(! isLogged) {
      this._authenticateService.redirectUrl = url;
      this.router.navigate(['/login']);
    }

    return isLogged;
  }
}
