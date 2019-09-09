import { Component, OnInit } from '@angular/core';
import { AddService } from './add.service';
import { AddItem } from './add-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-loading-dynamic-component-with-directive';
  adds: AddItem[] = [];

  constructor(private service: AddService) {

  }
  ngOnInit(): void {
    this.adds = this.service.selectAll();
  }
}
