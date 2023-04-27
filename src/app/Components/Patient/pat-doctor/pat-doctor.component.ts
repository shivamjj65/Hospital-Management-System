import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorApiService } from 'src/app/Service/Doctor/doctor-api.service';
import { faPencil,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-pat-doctor',
  templateUrl: './pat-doctor.component.html',
  styleUrls: ['./pat-doctor.component.css']
})

export class PatDoctorComponent {
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
}
