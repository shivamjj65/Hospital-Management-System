import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientApiService } from 'src/app/Service/Patient/patient-api.service';
import { Patient } from 'src/app/Models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {

  pat:Patient;
  constructor(public ps:PatientApiService, private router:Router)
  {
    this.pat = this.ps.patientData;
    console.log(this.pat);
  }

  
  ngOnInit(){
    
  }

  submit(form:NgForm)
  {
    this.update(form);
  }

  update(myForm:NgForm)
  {
    this.ps.updatePatient()
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
