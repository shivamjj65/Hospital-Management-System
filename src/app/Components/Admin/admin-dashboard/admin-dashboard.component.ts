import { Component } from '@angular/core';
import { faHeartbeat, faCog, faHouse, faUserPen, faUserDoctor, faBed,faCalendarCheck, faFilePrescription, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent {
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
    this.router.navigate(['admin/dashboard']);
  }

}
