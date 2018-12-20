import { Component } from "@angular/core";
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

    constructor(private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit(): void {
        this._clone = CLONES.find((value: Clone, index: number, obj: Clone[]) => {
            return value.id === +this._route.snapshot.params["id"]; // + to cast to int
        });
    }

    goBack() {
        this._router.navigate(["./clones"]);
    }

    get clone(): Clone {
        return this._clone;
    }
    set clone(value: Clone) {
        this._clone = value;
    }
}