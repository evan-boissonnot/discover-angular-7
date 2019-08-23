import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit, AfterViewInit {

  items: string[] = [];

  constructor() {
    this.items.push('coucou');
    this.items.push('ca va ?');
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.collapsible');
    console.log(elems);

    var instances = M.Collapsible.init(elems, {});
  }
}
