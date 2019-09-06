import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-query-and-stagger',
  templateUrl: './query-and-stagger.component.html',
  styleUrls: ['./query-and-stagger.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.test', [
          style({
            opacity: 0,
            transform: 'translateY(-500px)'
          }),
          stagger('500ms', [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class QueryAndStaggerComponent implements OnInit {
  items = [];
  isPopulated = false;

  constructor() { }

  ngOnInit() {

  }

  addOne() {
    this.items.push('hey !');
  }

  populate() {
    if (this.isPopulated) {
      this.items = [];
    } else {
      this.items.push('coucou');
      this.items.push('ca va ?');
    }

    this.isPopulated = !this.isPopulated;
  }
}
