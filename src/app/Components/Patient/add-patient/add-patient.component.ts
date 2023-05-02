import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientApiService } from 'src/app/Service/Patient/patient-api.service';
import { Patient } from 'src/app/Models/patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent {
  constructor(public ps: PatientApiService, private router: Router) { }

  ngOnInit() {
    this.getDate();
  }

  minDate: any;
  maxDate:any;
  getDate(): void {
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
    this.maxDate = year + '-' + month + '-' + todayDate;
  }

  submit(form:NgForm)
  {
    console.log('submitted');
    if(this.ps.patientData.id==0){
      this.insert(form);
    }
  }

  insert(myForm:NgForm)
  {
    this.ps.postPatient()
    this.ps.getPatient().subscribe(res=>{
      this.ps.patientsList=res;
    });
    this.resetForm(myForm);
    this.refreshData();
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.ps.patientData=new Patient();
  }

  refreshData(){
    this.ps.getPatient().subscribe(res=>{
      this.ps.patientsList=res;
    });
    this.router.navigate(['admin/get-patient']);
  }

  cancel(){
    this.router.navigate(['admin/get-patient']);
  }

}
