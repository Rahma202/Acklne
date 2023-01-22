import { TestBed } from '@angular/core/testing';

import { AlibabaService } from './alibaba.service';

describe('AlibabaService', () => {
  let service: AlibabaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlibabaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
