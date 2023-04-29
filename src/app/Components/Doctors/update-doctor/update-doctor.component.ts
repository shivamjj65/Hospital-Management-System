import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorApiService } from 'src/app/Service/Doctor/doctor-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})

export class UpdateDoctorComponent {
  doc:Doctor;
  constructor(public ds:DoctorApiService, private router:Router)
  {
    this.doc = this.ds.updatedDoctorData;
    console.log(this.doc);
  }

  
  ngOnInit(){
    
  }

  submit(form:NgForm)
  {
    this.update(form);
  }

  update(myForm:NgForm)
  {
    this.ds.updateDoctor()
    this.resetForm(myForm);
    this.refreshData();
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.ds.updatedDoctorData=new Doctor();
  }

  refreshData(){
    this.ds.getDoctor().subscribe(res=>{
      this.ds.doctorsList=res;
    });
    this.router.navigate(['admin/get-doctor']);
  }

  cancel(){
    this.router.navigate(['admin/get-doctor']);
  }
}
