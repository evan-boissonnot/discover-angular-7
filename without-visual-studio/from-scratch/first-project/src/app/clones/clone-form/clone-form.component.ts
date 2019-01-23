import { Component, OnInit, Input } from '@angular/core';
import { Clone } from './../../models/clone';
import { ActivatedRoute, Router } from '@angular/router';
import { CloneService } from '../../services/clone-service';

@Component({
  selector: 'app-clone-form',
  templateUrl: './app/clones/clone-form/clone-form.component.html',
  styleUrls: ['./app/clones/clone-form/clone-form.component.css']
})
export class CloneFormComponent implements OnInit {
  @Input() clone: Clone;

  constructor(private _route: ActivatedRoute, 
              private _router: Router,
              private _service: CloneService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    let link = ['/clone', this.clone.id];
    this._router.navigate(link);
  }
}
