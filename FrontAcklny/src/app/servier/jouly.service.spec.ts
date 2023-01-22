import { TestBed } from '@angular/core/testing';

import { JoulyService } from './jouly.service';

describe('JoulyService', () => {
  let service: JoulyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoulyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
