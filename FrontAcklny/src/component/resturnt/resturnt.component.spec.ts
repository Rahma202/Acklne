import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturntComponent } from './resturnt.component';

describe('ResturntComponent', () => {
  let component: ResturntComponent;
  let fixture: ComponentFixture<ResturntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
