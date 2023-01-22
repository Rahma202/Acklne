import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaconaComponent } from './balacona.component';

describe('BalaconaComponent', () => {
  let component: BalaconaComponent;
  let fixture: ComponentFixture<BalaconaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalaconaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalaconaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
