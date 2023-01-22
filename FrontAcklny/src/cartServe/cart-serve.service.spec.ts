import { TestBed } from '@angular/core/testing';

import { CartServeService } from './cart-serve.service';

describe('CartServeService', () => {
  let service: CartServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
