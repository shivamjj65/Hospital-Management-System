import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocAppointmentComponent } from './show-doc-appointment.component';

describe('ShowDocAppointmentComponent', () => {
  let component: ShowDocAppointmentComponent;
  let fixture: ComponentFixture<ShowDocAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDocAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
