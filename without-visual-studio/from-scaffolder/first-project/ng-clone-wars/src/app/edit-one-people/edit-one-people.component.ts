import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { People } from '../people';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-one-people',
  templateUrl: './edit-one-people.component.html',
  styleUrls: ['./edit-one-people.component.css']
})
export class EditOnePeopleComponent implements OnInit {

  @Input() item: People = new People();
  @ViewChild('uneForm') form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  saveOne(): void {
    console.log(this.form.valid);
    console.log(this.item.name);
  }

}
