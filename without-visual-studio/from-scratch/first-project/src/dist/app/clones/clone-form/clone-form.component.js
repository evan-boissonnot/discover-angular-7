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
const clone_1 = require("./../../models/clone");
const router_1 = require("@angular/router");
const clone_service_1 = require("../../services/clone-service");
let CloneFormComponent = class CloneFormComponent {
    constructor(_route, _router, _service) {
        this._route = _route;
        this._router = _router;
        this._service = _service;
    }
    ngOnInit() {
    }
    onSubmit() {
        let link = ['/clone', this.clone.id];
        this._router.navigate(link);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", clone_1.Clone)
], CloneFormComponent.prototype, "clone", void 0);
CloneFormComponent = __decorate([
    core_1.Component({
        selector: 'app-clone-form',
        templateUrl: './clone-form.component.html',
        styleUrls: ['./clone-form.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router,
        clone_service_1.CloneService])
], CloneFormComponent);
exports.CloneFormComponent = CloneFormComponent;
//# sourceMappingURL=clone-form.component.js.map