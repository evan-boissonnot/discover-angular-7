import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animation, animate } from '@angular/animations';

@Component({
  selector: 'app-enter-leaving-animation',
  templateUrl: './enter-leaving-animation.component.html',
  styleUrls: ['./enter-leaving-animation.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      // transition('void => *', [ // void : when html of the component is created
      //   style({ transform: 'translateX(-100%)' }),
      //   animate('1s')
      // ])
      transition(':enter', [ // same as 'void => *'
        style({ transform: 'translateX(-100%)' }),
        animate('1s')
      ])
    ]),
  ]
})
export class EnterLeavingAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
