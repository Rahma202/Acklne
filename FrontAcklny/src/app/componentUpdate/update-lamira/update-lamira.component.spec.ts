import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLamiraComponent } from './update-lamira.component';

describe('UpdateLamiraComponent', () => {
  let component: UpdateLamiraComponent;
  let fixture: ComponentFixture<UpdateLamiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLamiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLamiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
