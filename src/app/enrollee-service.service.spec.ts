import { TestBed } from '@angular/core/testing';

import { EnrolleeServiceService } from './enrollee-service.service';

describe('EnrolleeServiceService', () => {
  let service: EnrolleeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolleeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
