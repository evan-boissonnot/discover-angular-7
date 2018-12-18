"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Export a gun as a class
class Gun {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get power() {
        return this._power;
    }
    set power(value) {
        this._power = value;
    }
}
exports.Gun = Gun;
//# sourceMappingURL=gun.js.map