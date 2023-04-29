import { Component } from '@angular/core';
import { AppointmentClass } from 'src/app/Models/appointment';
import { AppointmentApiService } from 'src/app/Service/Appointment/appointment-api.service';

@Component({
  selector: 'app-show-appointment',
  templateUrl: './show-appointment.component.html',
  styleUrls: ['./show-appointment.component.css']
})
export class ShowAppointmentComponent {
  appointmentData: any = [];

  searchTerm: string = '';
  data: any[] = [];


  constructor(public appDataService: AppointmentApiService) {
    this.appDataService.getAppointments().subscribe(data => {
      //console.log(data);
      this.appointmentData = data;
    });

    this.appDataService.getDoctors().subscribe(dr => {

      this.appDataService.listDoctorsClass = dr;
    });

    this.appDataService.getPatients().subscribe(pt => {
      this.appDataService.listPatientsClass = pt;
    });

  }

  ngOnInit() {
    this.getDate();
  }

  minDate: any;
  getDate() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    if (todayDate < 10) {
      todayDate = "0" + todayDate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }

    var year: any = date.getFullYear();
    this.minDate = year + "-" + month + "-" + todayDate;

  }



  refreshData() {
    this.appDataService.getAppointments().subscribe(data => {
      console.log(data);
      this.appointmentData = data;
    },
      err => {
        alert('Unable to delete the record..');

      }
    );
  }



  delete(id: number) {
    if (confirm("Are you really want to delect this record?")) {
      this.appDataService.deleteAppointment(id).subscribe(data => {
        alert('Record Deleted');
        this.appDataService.getAppointments().subscribe(data => {
          this.appointmentData = data;
        });
      },
        ere => {
          alert('Unable to delete the record..');

        });
    }
  }

  Onsubmit() {
    console.log(this.appDataService.appData)
    this.appDataService.bookAppointment(this.appDataService.appData).subscribe(res => {
      alert('Booking Successful')
      this.appDataService.appData = new AppointmentClass();

      this.refreshData();
    },
      ere => {
        alert('Enter Correct Patient Id');

      });

  }

  edit(appData: AppointmentClass) {
    console.log(appData)
    this.appDataService.appData = appData;
  }


  confirmAppointment(id: any) {
    this.appDataService.approveAppointment(id).subscribe(ca => {
      this.appointmentData = ca;
      this.refreshData();

    });
  }


  cancelAppointment(id: any) {
    this.appDataService.rejectAppointment(id).subscribe(ra => {
      this.appointmentData = ra;

      this.refreshData();

    });
  }

  isValid() {
    return this.appDataService.appData.patientId > 0 && this.appDataService.appData.doctorId && this.appDataService.appData.appointmentDate;
  }


  search() {
    if (this.searchTerm === '') {
      this.appointmentData = this.data;
    } else {
      this.appointmentData = this.data.filter(item => {
        return item.appointmentData.patient.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
}
