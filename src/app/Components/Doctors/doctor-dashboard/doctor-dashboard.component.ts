import { Component } from '@angular/core';
import { faHeartbeat, faCog, faHouse, faUserPen, faUserDoctor, faBed,faCalendarCheck, faFilePrescription, faIndianRupeeSign, faSignOut} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/Authorization/auth.service';

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
  faLogout=faSignOut;
  
  constructor(private router:Router, private auth:AuthService)
  {

  }
  homeClick(){
    this.router.navigate(['doctor/home']);
  }
  logout(){
    this.auth.signOut();
  }
}
