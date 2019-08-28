import { Component, OnInit } from '@angular/core';
import { state, style, trigger, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-disabled-animation',
  templateUrl: './disabled-animation.component.html',
  styleUrls: ['./disabled-animation.component.css'],
  animations: [
    trigger('anim01', [
      state('test1', style({
        height: 200
      })),
      transition('* => test1', [
        animate('1s')
      ]),
      transition(':enter', [
        animate('1s', style({
          backgroundColor: 'red'
        }))
      ]),
      transition(':leave', [
        animate('2s', style({
          backgroundColor: 'white'
        }))
      ])
    ])

  ]
})
export class DisabledAnimationComponent implements OnInit {
  isDisabled = false;
  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.isDisabled = !this.isDisabled;
  }

  changeVisible() {
    this.isShow = !this.isShow;
  }
}
