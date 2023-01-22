import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateYoulyComponent } from './update-youly.component';

describe('UpdateYoulyComponent', () => {
  let component: UpdateYoulyComponent;
  let fixture: ComponentFixture<UpdateYoulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateYoulyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateYoulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
