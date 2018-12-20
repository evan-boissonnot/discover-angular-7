import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Clone } from "../../models/clone";
import { Gun } from "../../models/gun";
import { CLONES } from "../../services/mock-clones";

@Component({
  selector: 'app-clone-list',
  templateUrl: './app/clones/clone-list/clone-list.component.html',
  styleUrls: ['./app/clones/clone-list/clone-list.component.css']
})
export class CloneListComponent implements OnInit {
  private _clones: Clone[];
  private _title = "Les clones";

  constructor(private _router: Router) { }

  ngOnInit() {
    this._clones = CLONES;
  }

  selectOne(clone: Clone) {
    console.log('Hey ' + (clone != null ? clone.name : "empty"));

    let url = ["/clone", clone.id];
    this._router.navigate(url);
  }

  // getter for _title property
  get title() {
    return this._title;
  }

  // setter for _title property
  set title(value) {
      this._title = value;
  }

  // getter of the clone array
  get clones() : Clone[] {
    return this._clones;
  }
}
