import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYoulyComponent } from './add-youly.component';

describe('AddYoulyComponent', () => {
  let component: AddYoulyComponent;
  let fixture: ComponentFixture<AddYoulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYoulyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddYoulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
