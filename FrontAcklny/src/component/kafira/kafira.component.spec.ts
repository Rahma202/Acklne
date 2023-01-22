import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafiraComponent } from './kafira.component';

describe('KafiraComponent', () => {
  let component: KafiraComponent;
  let fixture: ComponentFixture<KafiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KafiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KafiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
