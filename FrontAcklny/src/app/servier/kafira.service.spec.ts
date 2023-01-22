import { TestBed } from '@angular/core/testing';

import { KafiraService } from './kafira.service';

describe('KafiraService', () => {
  let service: KafiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KafiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
