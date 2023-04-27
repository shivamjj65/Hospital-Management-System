import { Component } from '@angular/core';
import { faHeartbeat, faCog, faHouse, faUserPen, faUserDoctor, faBed,faCalendarCheck, faFilePrescription, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {
  faHeart = faHeartbeat;
  faCog = faCog;
  faHome = faHouse;
  faUser = faUserPen;
  faDoc = faUserDoctor;
  faPat = faBed;
  faApp = faCalendarCheck;
  faPx = faFilePrescription;
  faRs = faIndianRupeeSign;
  
  constructor(private router:Router)
  {

  }
  homeClick(){
    this.router.navigate(['doctor/dashboard']);
  }
}
