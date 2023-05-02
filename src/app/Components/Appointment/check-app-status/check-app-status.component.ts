import { Component } from '@angular/core';
import { AppointmentClass } from 'src/app/Models/appointment';
import { AppointmentApiService } from 'src/app/Service/Appointment/appointment-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-app-status',
  templateUrl: './check-app-status.component.html',
  styleUrls: ['./check-app-status.component.css'],
})
export class CheckAppStatusComponent {
  constructor(public appDataService: AppointmentApiService) {
    this.getDate();

    // Hardcode ID here
    // Set this ID after login equal as patient ID
    this.getAppointmentByPatientId(5);

    this.appDataService.getDoctors().subscribe((dr) => {
      this.appDataService.listDoctorsClass = dr;
    });
  }

  appointmentData1: any = [];
  appointmentData: any = [];

  data: any[] = [];

  minDate: any;

  getDate() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    var year: any = date.getFullYear();
    this.minDate = year + '-' + month + '-' + todayDate;
  }

  isValid() {
    return (
      this.appDataService.appData.doctorId &&
      this.appDataService.appData.appointmentDate
    );
  }

  Onsubmit() {
    console.log(this.appDataService.appData);
    this.appDataService.bookAppointment(this.appDataService.appData).subscribe(
      (res) => {
        alert('Booking Successful');
        this.appDataService.appData = new AppointmentClass();

        this.refreshData();
      },
      (ere) => {
        alert('Enter Correct Details..');
      }
    );
  }

  refreshData() {
    this.appDataService.getAppointments().subscribe(
      (data) => {
        console.log(data);
        this.appointmentData = data;
      },
      (err) => {
        alert('Unable to refresh..');
      }
    );
  }
  getAppointmentByPatientId(id: any) {
    this.appDataService.appointmentByPatientId(id).subscribe((aid) => {
      this.appointmentData = aid;
    });
  }
}
