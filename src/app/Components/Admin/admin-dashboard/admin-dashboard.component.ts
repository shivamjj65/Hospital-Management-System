import { Component } from '@angular/core';
import { faSignOut,faHeartbeat, faCog, faHouse, faUserPen, faUserDoctor, faBed,faCalendarCheck, faFilePrescription, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/Authorization/auth.service';
import { UserStoreService } from 'src/app/Service/Authorization/user-store.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent {
  faHeart = faHeartbeat;
  faCog = faCog;
  faHome = faHouse;
  faLogout=faSignOut;
  faUser = faUserPen;
  faDoc = faUserDoctor;
  faPat = faBed;
  faApp = faCalendarCheck;
  faPx = faFilePrescription;
  faRs = faIndianRupeeSign;

  constructor(private router:Router,private auth: AuthService, private userStore: UserStoreService)
  {

  }
  homeClick(){
    this.router.navigate(['admin/home']);
  }

  logout(){
    this.auth.signOut();
  }

}
