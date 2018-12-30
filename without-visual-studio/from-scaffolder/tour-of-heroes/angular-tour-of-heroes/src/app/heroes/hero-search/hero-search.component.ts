import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, of } from 'rxjs';
import { switchMap, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  private surveySearching: Subject<string> = new Subject<string>();
  @Output() searchingHeroes = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    // debounceTime(300),
    // this.surveySearching.pipe(
    //   map(item => console.log('ess'))
    // );

    // this.surveySearching.pipe(
    //   (content) => this.searchingHeroes.emit(content)
    // );
    this.surveySearching.subscribe(content => this.searchingHeroes.emit(content));
  }

  search(content: string): void {
    // console.log(content);
    this.surveySearching.next(content);
    // this.searchingHeroes.emit(content);
  }
}
