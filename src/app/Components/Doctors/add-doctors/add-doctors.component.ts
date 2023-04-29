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
  ngOnInit(){
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
    this.maxDate = year-25 + '-' + month + '-' + todayDate;   // doctor age should be 25+
  }

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
    this.router.navigate(['admin/get-doctor']);
  }

  cancel(){
    this.router.navigate(['admin/get-doctor']);
  }

}
