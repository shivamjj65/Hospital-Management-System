import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorApiService } from 'src/app/Service/Doctor/doctor-api.service';
import { faPencil,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-doctors',
  templateUrl: './get-doctors.component.html',
  styleUrls: ['./get-doctors.component.css']
})

export class GetDoctorsComponent {
  faPen = faPencil;
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(public ds:DoctorApiService, private router:Router) 
  {
    // this.data.getDoctorData().subscribe(data => {console.log(data);this.doctorsList=data});
  }

  ngOnInit(){
    this.getDoctor()
  }

  getDoctor(){
    this.ds.getDoctor().subscribe(data => {this.ds.doctorsList=data});
  }
  
  addDoctor(){
    this.router.navigate(['admin/dashboard/add-doctor']);
  }

  updateDoctor(){

  }

  deleteDoctor(docId:number){
    this.ds.deleteDoctor(docId).subscribe(()=>{this.getDoctor();});
  }
}