// import of needed elements
import { Component } from "@angular/core";
import { OnInit } from "@angular/core"; // Interface to init

import { Clone } from "./models/clone";
import { CLONES } from "./services/mock-clones";

// declaration of the component tag / class decoration
// selector et template sont obligatoires
@Component({
    selector: "clonewars-app",
    template: "<h1>Liste des clones</h1>"
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
        this._clones = CLONES;
    }
    name = "Angular";

    private _clones: Clone[];

    selectClone(clone: Clone) {
        alert('Hey ' + clone.name);
    }
}