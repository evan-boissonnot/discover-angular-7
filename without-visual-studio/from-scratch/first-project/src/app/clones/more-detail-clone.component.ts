import { Component } from "@angular/core";
import { CloneService } from "./../services/clone-service";
import { OnInit } from "@angular/core"; // Interface to init
import { Router, ActivatedRoute, Params} from "@angular/router";

import { CLONES } from "../services/mock-clones";
import { Clone } from "../models/clone";

@Component({
    selector: "detail-clone",
    templateUrl: "./app/clones/more-detail-clone.component.html"
})
export class MoreDetailCloneComponent implements OnInit{
    private _clone: Clone;

    constructor(private _route: ActivatedRoute, private _router: Router,
        private _service: CloneService) {
    }

    ngOnInit(): void {
        this._clone = this._service.getOne(+this._route.snapshot.params["id"]);
    }

    goBack() {
        this._router.navigate(["./clones"]);
    }

    editOne(clone: Clone): void {
        this._router.navigate(["./clone/edition/", clone.id]);
    }

    get clone(): Clone {
        return this._clone;
    }
    set clone(value: Clone) {
        this._clone = value;
    }
}