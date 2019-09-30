import { TestBed } from '@angular/core/testing';

import { Test01Service } from './test01.service';

describe('Test01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test01Service = TestBed.get(Test01Service);
    expect(service).toBeTruthy();
  });
});
