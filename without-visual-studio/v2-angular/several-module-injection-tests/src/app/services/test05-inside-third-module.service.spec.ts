import { TestBed } from '@angular/core/testing';

import { Test05InsideThirdModuleService } from './test05-inside-third-module.service';

describe('Test05InsideThirdModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test05InsideThirdModuleService = TestBed.get(Test05InsideThirdModuleService);
    expect(service).toBeTruthy();
  });
});
