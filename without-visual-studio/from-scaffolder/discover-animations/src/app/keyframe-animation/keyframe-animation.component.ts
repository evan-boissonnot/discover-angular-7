import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-keyframe-animation',
  templateUrl: './keyframe-animation.component.html',
  styleUrls: ['./keyframe-animation.component.css'],
  animations: [
    trigger('testSequence', [
      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'orange', offset: 0 }),
          style({ backgroundColor: 'green', offset: 0.3 }),
          style({ backgroundColor: 'yellow', offset: 0.8 }),
        ]))
      ])
    ])
  ]
})
export class KeyframeAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
