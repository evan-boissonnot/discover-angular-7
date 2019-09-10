import { TestBed } from '@angular/core/testing';

import { DroideService } from './droide.service';

describe('DroideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroideService = TestBed.get(DroideService);
    expect(service).toBeTruthy();
  });
});
