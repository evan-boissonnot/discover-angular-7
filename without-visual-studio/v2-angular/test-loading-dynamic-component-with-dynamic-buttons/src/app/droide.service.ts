import { Injectable } from '@angular/core';
import { Droide } from './droide';
import { UnComposantDynamicComponent } from './un-composant-dynamic/un-composant-dynamic.component';
import { DeuxComposantDynamicComponent } from './deux-composant-dynamic/deux-composant-dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class DroideService {

  constructor() { }

  public getAll(): Droide[] {
    const array: Droide[] = [];

    array.push(new Droide('R2D2', UnComposantDynamicComponent));
    array.push(new Droide('C3P0', DeuxComposantDynamicComponent));

    return array;
  }
}
