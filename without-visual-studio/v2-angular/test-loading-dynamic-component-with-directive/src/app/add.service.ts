import { Injectable } from '@angular/core';
import { AddItem } from './add-item';
import { OneAddComponent } from './one-add/one-add.component';
import { TwoAddComponent } from './two-add/two-add.component';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }

  selectAll(): AddItem[] {
    const array: AddItem[] = [];

    array.push(new AddItem(OneAddComponent, {}));
    array.push(new AddItem(TwoAddComponent, {}));

    return array;
  }
}
