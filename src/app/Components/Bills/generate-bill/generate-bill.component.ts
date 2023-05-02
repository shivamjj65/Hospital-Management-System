import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BillApiService } from 'src/app/Service/Bill/bill-api.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Appointment, Bill, Doctor, Patient } from 'src/app/Models/bill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})

export class GenerateBillComponent {
  today: Date = new Date();
  errorMessage: string;
  constructor(public billService: BillApiService, private http: HttpClient, private router:Router ) { }
  ngOnInit(): void {
    this.billService.getAppointment().subscribe(data => {
      this.billService.listAppointment = data;
    });
  }

  submit(ngForm: NgForm) {
    console.log('submit working')
    if (this.billService.billData.id == 0) {

      this.insertBill(ngForm);
      this.billService.getAppointment().subscribe(data => {
        this.billService.listAppointment = data;
      });
    }
    else
      this.updateBill(ngForm);


    console.log('event working');
  }
  displayName() {
    console.log('display working', this.billService.billData.appointmentId)
    this.http.get<Appointment>(this.billService.appointmentUrl + '/' + this.billService.billData.appointmentId).subscribe(
      data => {
        this.billService.billData.patientId = data.patientId;
        this.billService.billData.doctorId = data.doctorId;

        if (data.status) {
          this.http.get<Doctor>(this.billService.doctorUrl + '/' + data.doctorId).subscribe(
            data2 => {
              this.billService.doctorData = data2;

              console.log(this.billService.doctorData.name);
            }
          );


          this.http.get<Patient>(this.billService.patientUrl + '/' + data.patientId).subscribe(
            data1 => {
              this.billService.patientData = data1;

              console.log(this.billService.patientData.address);
            }
          );
        }
        else {
          if (window.confirm('Appointment not approved')) {
            window.location.reload();
          }


        }

      }
    )

  }
  insertBill(myform: NgForm) {
    this.billService.saveBill().subscribe(d => {
      this.resetForm(myform);
      this.billService.getBill().subscribe(res => {
        this.billService.listBill1 = res;
      });
      //this.refreshData();
    });
    console.log('saved success');
  }

  updateBill(myform: NgForm) {
    this.billService.updateBill().subscribe(d => {
      this.resetForm(myform);
      this.refreshData();
      console.log('update success');
    })
  }

  resetForm(myform: NgForm) {
    myform.form.reset();
    this.billService.billData = new Bill();
  }

  refreshData() {
    this.billService.getBill().subscribe(res => {
      this.billService.listBill1 = res;
    });
    this.router.navigate(['admin/get-bill']);
  }
}