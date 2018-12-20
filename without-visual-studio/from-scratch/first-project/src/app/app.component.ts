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

    testOnKeyPress(event: any) {
        this.onKeyPressValue = event.target.value;
    }

    testOnKeyPressAmeliore(value: string) {
        console.log(value);
        this.onKeyPressValue = value;
    }
}