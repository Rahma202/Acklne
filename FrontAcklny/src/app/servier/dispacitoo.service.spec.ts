import { TestBed } from '@angular/core/testing';

import { DispacitooService } from './dispacitoo.service';

describe('DispacitooService', () => {
  let service: DispacitooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispacitooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
