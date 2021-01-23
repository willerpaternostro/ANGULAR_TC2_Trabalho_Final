import { TestBed } from '@angular/core/testing';

import { WillerService } from './willer.service';

describe('WillerService', () => {
  let service: WillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
