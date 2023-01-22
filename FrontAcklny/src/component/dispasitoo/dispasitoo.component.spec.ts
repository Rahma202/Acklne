import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispasitooComponent } from './dispasitoo.component';

describe('DispasitooComponent', () => {
  let component: DispasitooComponent;
  let fixture: ComponentFixture<DispasitooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispasitooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispasitooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
