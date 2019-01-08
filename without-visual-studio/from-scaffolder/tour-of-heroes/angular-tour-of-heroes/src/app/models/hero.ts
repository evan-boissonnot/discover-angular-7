export class Hero {
    constructor(obj: any) {
      Object.assign(this, obj);
    }

    id: number;
    name: string;
}
