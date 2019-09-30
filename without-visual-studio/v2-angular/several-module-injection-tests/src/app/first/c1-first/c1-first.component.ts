import { Component, OnInit } from '@angular/core';
import { Test01Service } from '../../services/test01.service';

@Component({
  selector: 'app-c1-first',
  templateUrl: './c1-first.component.html',
  styleUrls: ['./c1-first.component.css']
})
export class C1FirstComponent implements OnInit {

  constructor(private service: Test01Service) {
    this.service.log('construct C1FIrst');
   }

  ngOnInit() {
    this.service.log('init C1FIrst');
  }

}
