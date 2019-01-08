"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser"); // browser module car module Racine
const route_config_module_1 = require("./route-config/route-config.module");
const highlight_directive_1 = require("./highlight.directive");
const app_component_1 = require("./app.component");
const not_found_exception_component_1 = require("./not-found-exception/not-found-exception.component");
const clones_module_1 = require("./clones/clones.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            clones_module_1.ClonesModule,
            route_config_module_1.RouteConfigModule // global routes
        ],
        declarations: [
            app_component_1.AppComponent,
            highlight_directive_1.HighlightDirective,
            not_found_exception_component_1.NotFoundExceptionComponent
        ],
        bootstrap: [
            app_component_1.AppComponent //moduleracineaudémarrage
        ],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map