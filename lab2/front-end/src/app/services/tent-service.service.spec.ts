import { TestBed } from '@angular/core/testing';

import { TentServiceService } from './tent-service.service';

describe('TentServiceService', () => {
  let service: TentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
