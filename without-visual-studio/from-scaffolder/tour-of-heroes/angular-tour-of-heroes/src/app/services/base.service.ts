import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private _messageLogger: MessageService) { }


  protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} n'a pas fonctionné : ${error.message}`);

      return of(result as T);
    };
  }

  protected log(message: string) {
    this._messageLogger.add(message);
  }
}
