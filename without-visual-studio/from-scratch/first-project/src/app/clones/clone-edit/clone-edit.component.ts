import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CloneService } from '../../services/clone-service';
import { Clone } from '../../models/clone';

@Component({
  selector: 'app-clone-edit',
  templateUrl: './app/clones/clone-edit/clone-edit.component.html',
  styleUrls: ['./app/clones/clone-edit/clone-edit.component.css']
})
export class CloneEditComponent implements OnInit {
  clone: Clone = null;

  constructor(private _route: ActivatedRoute, 
              private _router: Router,
              private _service: CloneService) { }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];

    this.clone = this._service.getOne(id);
  }



}
