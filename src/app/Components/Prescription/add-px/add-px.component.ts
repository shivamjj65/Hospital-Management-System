import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Prescription, Appointment, Patient } from 'src/app/Models/prescription';
import { PrescriptionApiService } from 'src/app/Service/Prescription/prescription-api.service';

@Component({
  selector: 'app-add-px',
  templateUrl: './add-px.component.html',
  styleUrls: ['./add-px.component.css']
})
export class AddPxComponent implements OnInit {

  today = new Date();
  myForm: FormGroup;
  constructor(public ps: PrescriptionApiService, private http: HttpClient, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');

    this.myForm = this.formBuilder.group({
      doctorId: ['', Validators.required],
      appointmentId: ['', Validators.required],
      prescriptionDate: ['', Validators.required],
      patientId: ['', Validators.required],
      prescriptionDetails: ['', Validators.required]
    });

  }

  displayName() {
    console.log(this.ps.prescriptionData.doctorId);

    console.log('date', this.ps.appointmentData.appointmentDate);



    this.ps.getAppointment().subscribe(data => {
      this.ps.listAppointment = data.filter((x: { doctorId: number, appointmentDate: Date }) =>
        x.doctorId == this.ps.prescriptionData.doctorId);
      console.log('pres list', this.ps.listAppointment);

    });

  }

  validation() {
    this.http.get<Appointment>(this.ps.appointmentUrl + '/' + this.ps.prescriptionData.appointmentId).subscribe(data => {
      this.ps.appointmentData = data;

      if (!this.ps.appointmentData.status) {
        if (window.confirm('Appointment not approved')) {
          window.location.reload();
        }
      }
    })
  }

  validated() {
    this.http.get<Appointment>(this.ps.appointmentUrl + '/' + this.ps.prescriptionData.appointmentId).subscribe(data => {
      this.ps.appointmentData = data;
      this.ps.dt = new Date(this.ps.appointmentData.appointmentDate);
      this.ps.dt.setDate(this.ps.dt.getDate() + 1);
      const formattedDate = this.ps.dt.toLocaleDateString('en-CA');

      console.log(this.ps.dt);

    })
  }

  // displayName() {
  //   console.log(this.ps.prescriptionData.doctorId);
  //   console.log(this.ps.appointmentData.appointmentDate);

  //   this.ps.getAppointment().subscribe(data => {
  //     this.ps.listAppointment = data.filter((x: { doctorId: number, appointmentDate: string }) => {
  //       const appointmentDate = new Date(x.appointmentDate);
  //       const selectedDate = new Date(this.ps.appointmentData.appointmentDate);
  //       return x.doctorId === this.ps.prescriptionData.doctorId &&
  //         appointmentDate.getFullYear() === selectedDate.getFullYear() &&
  //         appointmentDate.getMonth() === selectedDate.getMonth() &&
  //         appointmentDate.getDate() === selectedDate.getDate();
  //     });
  //     console.log('pres list',this.ps.listAppointment);
  //   });
  // }


  // displayAppointment(){
  //   this.ps.getAppointment().subscribe(data=>{

  //     this.ps.listAppointment=data.filter((x: { doctorId: number, patientId:number;  })=> x.doctorId==this.ps.prescriptionData.doctorId && x.patientId==this.ps.prescriptionData.appointmentId);


  //   });
  // }
  submit(ngForm: NgForm) {
    console.log('submit');

    if (this.ps.prescriptionData.id == 0) {

      this.insertPres(ngForm);
      this.ps.getPrescription().subscribe(data => {
        this.ps.listpres = data;
      });
    }
    else
      this.updatePres(ngForm);
  }
  patdetails() {

    this.http.get<Patient>(this.ps.patientUrl + '/' + this.ps.prescriptionData.patientId).subscribe(data4 => {
      this.ps.patientData = data4;

    })
  }

  insertPres(ngForm: NgForm) {
    this.ps.savePrescription().subscribe(d => {
      this.resetForm(ngForm);
      this.ps.getPrescription().subscribe(data => {
        this.ps.listpres = data.filter((x: { doctorId: number; }) => x.doctorId == this.ps.prescriptionData.doctorId);
        console.log('details', this.ps.prescriptionData.doctorId)
      })
    })
  }

  updatePres(ngForm: NgForm) {
    this.ps.updatePrescription().subscribe(d => {
      this.resetForm(ngForm);
      this.ps.getPrescription().subscribe(data => {
        this.ps.listpres = data.filter((x: { doctorId: number; }) => x.doctorId == this.ps.prescriptionData.doctorId);
        console.log('details', this.ps.prescriptionData.doctorId)
      })
    })
  }

  resetForm(myform: NgForm) {
    myform.form.reset();
    this.ps.prescriptionData = new Prescription();
  }
  refreshData() {
    this.ps.getPrescription().subscribe(data => {
      this.ps.listpres = data.filter((x: { doctorId: number; }) => x.doctorId == this.ps.prescriptionData.doctorId);
      console.log('details', this.ps.prescriptionData.doctorId)
    })
  }

}
