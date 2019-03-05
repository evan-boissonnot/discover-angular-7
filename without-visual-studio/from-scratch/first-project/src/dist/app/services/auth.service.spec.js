"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const auth_service_1 = require("./auth.service");
describe('Service: Auth', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_service_1.AuthService]
        });
    });
    it('should ...', testing_1.inject([auth_service_1.AuthService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=auth.service.spec.js.map