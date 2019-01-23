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
const clone_service_1 = require("../../services/clone-service");
let CloneEditComponent = class CloneEditComponent {
    constructor(_route, _router, _service) {
        this._route = _route;
        this._router = _router;
        this._service = _service;
        this.clone = null;
    }
    ngOnInit() {
        const id = +this._route.snapshot.params['id'];
        this.clone = this._service.getOne(id);
    }
};
CloneEditComponent = __decorate([
    core_1.Component({
        selector: 'app-clone-edit',
        templateUrl: './app/clones/clone-edit/clone-edit.component.html',
        styleUrls: ['./app/clones/clone-edit/clone-edit.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        clone_service_1.CloneService])
], CloneEditComponent);
exports.CloneEditComponent = CloneEditComponent;
//# sourceMappingURL=clone-edit.component.js.map