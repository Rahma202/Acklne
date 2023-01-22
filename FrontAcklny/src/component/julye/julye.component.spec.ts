import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulyeComponent } from './julye.component';

describe('JulyeComponent', () => {
  let component: JulyeComponent;
  let fixture: ComponentFixture<JulyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JulyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
