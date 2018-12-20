"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const clone_list_component_1 = require("./clone-list/clone-list.component");
const more_detail_clone_component_1 = require("./more-detail-clone.component");
const clones_route_config_module_1 = require("./clones-route-config.module");
let ClonesModule = class ClonesModule {
};
ClonesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            clones_route_config_module_1.ClonesRouteConfigModule
        ],
        declarations: [
            clone_list_component_1.CloneListComponent,
            more_detail_clone_component_1.MoreDetailCloneComponent
        ]
    })
], ClonesModule);
exports.ClonesModule = ClonesModule;
//# sourceMappingURL=clones.module.js.map