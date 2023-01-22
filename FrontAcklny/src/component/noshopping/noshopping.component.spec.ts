import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoshoppingComponent } from './noshopping.component';

describe('NoshoppingComponent', () => {
  let component: NoshoppingComponent;
  let fixture: ComponentFixture<NoshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoshoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
