import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAliBabaComponent } from './update-ali-baba.component';

describe('UpdateAliBabaComponent', () => {
  let component: UpdateAliBabaComponent;
  let fixture: ComponentFixture<UpdateAliBabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAliBabaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAliBabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
