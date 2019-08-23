import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';

@Component({
  selector: 'app-people-one',
  templateUrl: './people-one.component.html',
  styleUrls: ['./people-one.component.css']
})
export class PeopleOneComponent implements OnInit {
  @Input() item: People;

  constructor() { }

  ngOnInit() {
  }

}
