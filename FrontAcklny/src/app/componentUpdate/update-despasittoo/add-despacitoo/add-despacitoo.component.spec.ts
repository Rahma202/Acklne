import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDespacitooComponent } from './add-despacitoo.component';

describe('AddDespacitooComponent', () => {
  let component: AddDespacitooComponent;
  let fixture: ComponentFixture<AddDespacitooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDespacitooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDespacitooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
