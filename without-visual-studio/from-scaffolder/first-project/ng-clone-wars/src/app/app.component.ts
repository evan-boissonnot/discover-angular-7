import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isDisplayBloc = false;

  items = [];

  ngOnInit(): void {
    console.log('test');
    this._peopleService.getAll().subscribe(data => this.items = data);
  }

  constructor(private _peopleService: PeopleService) {

  }

  getValue(): string {
    return 'Test';
  }

  callMe(): void {
    this.isDisplayBloc = ! this.isDisplayBloc;
  }
}
