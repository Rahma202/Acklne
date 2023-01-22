import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLamiraComponent } from './add-lamira.component';

describe('AddLamiraComponent', () => {
  let component: AddLamiraComponent;
  let fixture: ComponentFixture<AddLamiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLamiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLamiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
