import { Injectable } from '@angular/core'
import { Clone } from "./../models/clone";
import { CLONES } from "./../services/mock-clones";

@Injectable()
export class CloneService {
    getList(): Clone[] {
        return CLONES;
    }

    getOne(id: number): Clone {
        return CLONES.find((item, index, array) => item.id == id);
    }
}
