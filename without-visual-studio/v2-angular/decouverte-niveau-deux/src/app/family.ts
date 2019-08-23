import { Wookie } from './wookie';

export class Family {
    private members: Array<Wookie> = [];

    constructor(private name: string) {}

    get familyName(): string {
        return this.name;
    }

    get getMembers(): Array<Wookie> {
        return this.members;
    }

    set addMember(wookie: Wookie) {
        this.members.push(wookie);
    }

    set familyName(name: string) {
        this.name = name;
    }
}
