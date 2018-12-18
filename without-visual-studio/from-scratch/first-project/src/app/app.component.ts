// import of needed elements
import { Component } from "@angular/core";
import { OnInit } from "@angular/core"; // Interface to init

import { Clone } from "./models/clone";
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
    
    onKeyPressValue = "";
    
    ngOnInit(): void {
        this._clones = CLONES;
    }

    // getter for _title property
    get title() {
        return this._title;
    }

    // setter for _title property
    set title(value) {
        this._title = value;
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