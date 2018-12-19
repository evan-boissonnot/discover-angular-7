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
let HighlightDirective = class HighlightDirective {
    constructor(_element) {
        this._element = _element;
        this.updateStyle(this._element);
    }
    onMouseEnter() {
        this._element.nativeElement.style.border = "solid 2px " + this.borderColor;
    }
    onMouseLeave() {
        this._element.nativeElement.style.border = "inherit";
    }
    updateStyle(element) {
        element.nativeElement.style.backgroundColor = 'yellow';
    }
};
__decorate([
    core_1.Input() // if we need to change the name @Input('newName')
    ,
    __metadata("design:type", String)
], HighlightDirective.prototype, "borderColor", void 0);
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = __decorate([
    core_1.Directive({
        selector: '[appHighlight]' // app{name} to stop confusing between this selector and a true css selector, don't use ng{name} !
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map