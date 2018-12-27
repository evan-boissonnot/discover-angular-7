import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../models/hero';

declare var M: any; // Materialize javascript framework

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') modal: ElementRef; // define a html input that can be used in component : its id is 'modal', here
  @Input() hero: Hero;
  private _modalElement: any;

  ngAfterViewInit(): void {
    M.Modal.init(this.modal.nativeElement);
  }

  constructor() { }

  ngOnInit() {

  }

}
