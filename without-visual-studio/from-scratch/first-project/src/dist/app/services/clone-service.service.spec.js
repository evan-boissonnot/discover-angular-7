"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const clone_service_service_1 = require("./clone-service.service");
describe('Service: CloneService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [clone_service_service_1.CloneServiceService]
        });
    });
    it('should ...', testing_1.inject([clone_service_service_1.CloneServiceService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=clone-service.service.spec.js.map