import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafiarAddComponent } from './kafiar-add.component';

describe('KafiarAddComponent', () => {
  let component: KafiarAddComponent;
  let fixture: ComponentFixture<KafiarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KafiarAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KafiarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
