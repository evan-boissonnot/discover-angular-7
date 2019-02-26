"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const more_detail_clone_component_1 = require("../clones/more-detail-clone.component");
const clone_list_component_1 = require("../clones/clone-list/clone-list.component");
const clone_edit_component_1 = require("./clone-edit/clone-edit.component");
const auth_guard_service_1 = require("../services/auth-guard.service");
const routes = [
    { path: 'clones', component: clone_list_component_1.CloneListComponent },
    { path: 'clone/edition/:id', component: clone_edit_component_1.CloneEditComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'clone/:id', component: more_detail_clone_component_1.MoreDetailCloneComponent },
];
let ClonesRouteConfigModule = class ClonesRouteConfigModule {
};
ClonesRouteConfigModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ClonesRouteConfigModule);
exports.ClonesRouteConfigModule = ClonesRouteConfigModule;
//# sourceMappingURL=clones-route-config.module.js.map