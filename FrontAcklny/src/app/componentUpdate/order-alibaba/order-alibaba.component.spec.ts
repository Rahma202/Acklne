import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAlibabaComponent } from './order-alibaba.component';

describe('OrderAlibabaComponent', () => {
  let component: OrderAlibabaComponent;
  let fixture: ComponentFixture<OrderAlibabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAlibabaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAlibabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
