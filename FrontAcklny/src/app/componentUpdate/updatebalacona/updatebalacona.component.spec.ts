import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebalaconaComponent } from './updatebalacona.component';

describe('UpdatebalaconaComponent', () => {
  let component: UpdatebalaconaComponent;
  let fixture: ComponentFixture<UpdatebalaconaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebalaconaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatebalaconaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
