import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorApiService } from 'src/app/Service/Doctor/doctor-api.service';
import { Doctor } from 'src/app/Models/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})

export class AddDoctorsComponent {
  constructor(public ds:DoctorApiService, private router:Router){}
  ngOnInit(){}

  submit(form:NgForm)
  {
    console.log('submitted');
    if(this.ds.doctorData.id==0){
      this.insert(form);
    }
  }

  insert(myForm:NgForm)
  {
    this.ds.postDoctor()
    this.resetForm(myForm);
    this.refreshData();
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.ds.doctorData=new Doctor();
  }

  refreshData(){
    this.ds.getDoctor().subscribe(res=>{
      this.ds.doctorsList=res;
    });
    this.router.navigate(['admin/dashboard/get-doctor']);
  }

  cancel(){
    this.router.navigate(['admin/dashboard/get-doctor']);
  }

}
