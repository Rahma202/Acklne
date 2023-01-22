import { TestBed } from '@angular/core/testing';

import { LamiraService } from './lamira.service';

describe('LamiraService', () => {
  let service: LamiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LamiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
