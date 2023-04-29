import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHeartbeat, faCog, faHouse, faUserPen, faUserDoctor, faBed,faCalendarCheck, faFilePrescription, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
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
    this.router.navigate(['patient/home']);
  }
}
