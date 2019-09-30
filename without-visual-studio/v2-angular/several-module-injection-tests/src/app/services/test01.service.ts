import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Test01Service {

  constructor() {
    this.log('Test01Service construct');
  }

  log(message: string) {
    console.log(message);
  }
}
