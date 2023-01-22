import { TestBed } from '@angular/core/testing';

import { BalaconaService } from './balacona.service';

describe('BalaconaService', () => {
  let service: BalaconaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalaconaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
