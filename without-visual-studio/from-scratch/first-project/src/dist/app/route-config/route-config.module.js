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
const not_found_exception_component_1 = require("../not-found-exception/not-found-exception.component");
const routes = [
    { path: '', redirectTo: 'clone/all', pathMatch: 'full' },
    { path: '**', component: not_found_exception_component_1.NotFoundExceptionComponent }
];
let RouteConfigModule = class RouteConfigModule {
};
RouteConfigModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule] // need to export to be used by AppModule !
    })
], RouteConfigModule);
exports.RouteConfigModule = RouteConfigModule;
//# sourceMappingURL=route-config.module.js.map