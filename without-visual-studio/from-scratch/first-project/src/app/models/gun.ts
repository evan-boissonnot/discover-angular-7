// Export a gun as a class
export class Gun {
    private _power: number;
    private _name: string;

    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }

    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get power() {
        return this._power;
    }
    set power(value: number) {
        this._power = value;
    }
}
