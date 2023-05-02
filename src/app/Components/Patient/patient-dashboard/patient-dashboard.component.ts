import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut, faHeartbeat, faCog, faHouse, faUserPen, faUserDoctor, faBed,faCalendarCheck, faFilePrescription, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Service/Authorization/auth.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  faLogout = faSignOut;
  faHeart = faHeartbeat;
  faCog = faCog;
  faHome = faHouse;
  faUser = faUserPen;
  faDoc = faUserDoctor;
  faPat = faBed;
  faApp = faCalendarCheck;
  faPx = faFilePrescription;
  faRs = faIndianRupeeSign;
  
  constructor(private router:Router, private auth:AuthService)
  {

  }
  homeClick(){
    this.router.navigate(['patient/home']);
  }
  logout(){
    this.auth.signOut();
  }
}
