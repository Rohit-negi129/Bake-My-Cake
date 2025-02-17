import { TestBed } from '@angular/core/testing';

import { CakeRequestsService } from './cake-requests.service';

describe('CakeRequestsService', () => {
  let service: CakeRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
