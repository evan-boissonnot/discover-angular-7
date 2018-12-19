// import of needed elements
import { Component } from "@angular/core";
import { OnInit } from "@angular/core"; // Interface to init

import { Clone } from "./models/clone";
import { Gun } from "./models/gun";
import { CLONES } from "./services/mock-clones";

// declaration of the component tag / class decoration
// selector et template sont obligatoires
@Component({
    selector: "clonewars-app",
    templateUrl: "./app/app.component.html"
})
export class AppComponent implements OnInit{
    private _clones: Clone[];
    private _title = "Les clones";
    
    isDemo: boolean = false;
    onKeyPressValue = "";
    clone: Clone;
    clone2: Clone;
    
    ngOnInit(): void {
        this._clones = CLONES;
        this.clone = this._clones[0];

        this.clone2 = this._clones[1];
        this.clone2.weapon = new Gun("Blaster", 18);
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

    testOnKeyPress(event: any) {
        this.onKeyPressValue = event.target.value;
    }

    testOnKeyPressAmeliore(value: string) {
        console.log(value);
        this.onKeyPressValue = value;
    }

    selectClone(clone: Clone) {
        alert('Hey ' + (clone != null ? clone.name : "empty"));
    }
}