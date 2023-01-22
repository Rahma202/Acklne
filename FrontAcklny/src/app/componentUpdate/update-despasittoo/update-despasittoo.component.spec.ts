import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDespasittooComponent } from './update-despasittoo.component';

describe('UpdateDespasittooComponent', () => {
  let component: UpdateDespasittooComponent;
  let fixture: ComponentFixture<UpdateDespasittooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDespasittooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDespasittooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
