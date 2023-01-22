import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlibabaComponent } from './alibaba.component';

describe('AlibabaComponent', () => {
  let component: AlibabaComponent;
  let fixture: ComponentFixture<AlibabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlibabaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlibabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
