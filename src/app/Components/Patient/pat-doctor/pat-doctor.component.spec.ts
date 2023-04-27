import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatDoctorComponent } from './pat-doctor.component';

describe('PatDoctorComponent', () => {
  let component: PatDoctorComponent;
  let fixture: ComponentFixture<PatDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
