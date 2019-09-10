import { Component, OnInit } from '@angular/core';
import { ComposantDynamic } from '../composant-dynamic';

@Component({
  selector: 'app-un-composant-dynamic',
  templateUrl: './un-composant-dynamic.component.html',
  styleUrls: ['./un-composant-dynamic.component.css']
})
export class UnComposantDynamicComponent implements OnInit, ComposantDynamic {
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
