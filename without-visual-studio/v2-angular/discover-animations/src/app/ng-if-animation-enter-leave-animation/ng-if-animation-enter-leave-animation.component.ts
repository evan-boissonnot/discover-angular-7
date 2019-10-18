import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ng-if-animation-enter-leave-animation',
  templateUrl: './ng-if-animation-enter-leave-animation.component.html',
  styleUrls: ['./ng-if-animation-enter-leave-animation.component.css'],
  animations: [
    trigger('animateItem', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('3s', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          backgroundColor: 'red'
        }),
        animate('2s', style({
          opacity: 0,
          backgroundColor: 'white'
        }))
      ])
    ])
  ]
})
export class NgIfAnimationEnterLeaveAnimationComponent implements OnInit {
  isShown = false;

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.isShown = ! this.isShown;
  }

}
