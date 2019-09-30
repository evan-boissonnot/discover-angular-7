import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'app-group-animation',
  templateUrl: './group-animation.component.html',
  styleUrls: ['./group-animation.component.css'],
  animations: [
    trigger('flying', [
      state('in', style({
        width: 100,
        transform: 'translateX(0)',
        opacity: 0
      })),
      transition('void => *', [
        style({
          width: 500,
          transform: 'translateX(100px)',
          opacity: 0,
          backgroundColor: 'green'
        }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1,
            backgroundColor: 'red'
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class GroupAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
