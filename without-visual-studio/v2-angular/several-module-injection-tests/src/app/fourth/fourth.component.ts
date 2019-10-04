import { Component, OnInit } from '@angular/core';
import { Test05InsideThirdModuleService } from '../services/test05-inside-third-module.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
