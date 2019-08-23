import { Family } from './family';

export class Wookie {
    constructor(private name: string, private _family: Family) {}

    get lastName(): string {
        return this.family.familyName;
    }

    get family(): Family {
      return this._family;
    }
}
