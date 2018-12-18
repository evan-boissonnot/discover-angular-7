"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import of needed elements
const core_1 = require("@angular/core");
const mock_clones_1 = require("./services/mock-clones");
// declaration of the component tag / class decoration
// selector et template sont obligatoires
let AppComponent = class AppComponent {
    // declaration of the component tag / class decoration
    // selector et template sont obligatoires
    constructor() {
        this._title = "Les clones";
        this.onKeyPressValue = "";
    }
    ngOnInit() {
        this._clones = mock_clones_1.CLONES;
    }
    // getter for _title property
    get title() {
        return this._title;
    }
    // setter for _title property
    set title(value) {
        this._title = value;
    }
    testOnKeyPress(event) {
        this.onKeyPressValue = event.target.value;
    }
    testOnKeyPressAmeliore(value) {
        console.log(value);
        this.onKeyPressValue = value;
    }
    selectClone(clone) {
        alert('Hey ' + (clone != null ? clone.name : "empty"));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "clonewars-app",
        templateUrl: "./app/app.component.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map