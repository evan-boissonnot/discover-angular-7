import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-first-animation',
  templateUrl: './first-animation.component.html',
  styleUrls: ['./first-animation.component.css'],
  animations: [
    trigger('openClose', [
      state('opening', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('opening => closed', [
        animate('1s')
      ]),
      transition('closed => opening', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class FirstAnimationComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

}
