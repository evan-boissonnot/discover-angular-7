import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {


  }

}
