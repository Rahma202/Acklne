import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBalaconaComponent } from './add-balacona.component';

describe('AddBalaconaComponent', () => {
  let component: AddBalaconaComponent;
  let fixture: ComponentFixture<AddBalaconaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBalaconaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBalaconaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
