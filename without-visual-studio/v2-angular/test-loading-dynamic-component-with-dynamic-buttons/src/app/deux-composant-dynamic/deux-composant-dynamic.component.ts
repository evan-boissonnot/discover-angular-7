import { Component, OnInit } from '@angular/core';
import { ComposantDynamic } from '../composant-dynamic';

@Component({
  selector: 'app-deux-composant-dynamic',
  templateUrl: './deux-composant-dynamic.component.html',
  styleUrls: ['./deux-composant-dynamic.component.css']
})
export class DeuxComposantDynamicComponent implements OnInit, ComposantDynamic {
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
