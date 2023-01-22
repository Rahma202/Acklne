import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataAliBabaComponent } from './add-data-ali-baba.component';

describe('AddDataAliBabaComponent', () => {
  let component: AddDataAliBabaComponent;
  let fixture: ComponentFixture<AddDataAliBabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataAliBabaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataAliBabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
