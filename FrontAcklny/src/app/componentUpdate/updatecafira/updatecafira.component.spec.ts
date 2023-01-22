import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecafiraComponent } from './updatecafira.component';

describe('UpdatecafiraComponent', () => {
  let component: UpdatecafiraComponent;
  let fixture: ComponentFixture<UpdatecafiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecafiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecafiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
