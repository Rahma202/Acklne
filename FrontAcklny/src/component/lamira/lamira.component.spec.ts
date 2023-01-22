import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamiraComponent } from './lamira.component';

describe('LamiraComponent', () => {
  let component: LamiraComponent;
  let fixture: ComponentFixture<LamiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
