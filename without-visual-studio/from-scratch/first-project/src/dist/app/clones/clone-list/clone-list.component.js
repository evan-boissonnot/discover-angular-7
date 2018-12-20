"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const mock_clones_1 = require("../../services/mock-clones");
let CloneListComponent = class CloneListComponent {
    constructor(_router) {
        this._router = _router;
        this._title = "Les clones";
    }
    ngOnInit() {
        this._clones = mock_clones_1.CLONES;
    }
    selectOne(clone) {
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
    get clones() {
        return this._clones;
    }
};
CloneListComponent = __decorate([
    core_1.Component({
        selector: 'app-clone-list',
        templateUrl: './app/clones/clone-list/clone-list.component.html',
        styleUrls: ['./app/clones/clone-list/clone-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CloneListComponent);
exports.CloneListComponent = CloneListComponent;
//# sourceMappingURL=clone-list.component.js.map