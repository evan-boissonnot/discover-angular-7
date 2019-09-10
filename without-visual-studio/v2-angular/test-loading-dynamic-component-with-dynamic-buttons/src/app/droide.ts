import { ComposantDynamic } from './composant-dynamic';
import { Type } from '@angular/core';

export class Droide {
  constructor(public name: string, public component: Type<ComposantDynamic>) {

  }
}
