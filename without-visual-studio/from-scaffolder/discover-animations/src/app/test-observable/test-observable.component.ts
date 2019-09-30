import { Component, OnInit } from '@angular/core';
import { TestObservableService } from '../test-observable.service';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  constructor(private service: TestObservableService) { }

  ngOnInit() {
    console.log('0');
    this.service.testEmpty();
    console.log('1');
    this.service.testEmpty().subscribe(success => console.log('yes'));
  }

}
