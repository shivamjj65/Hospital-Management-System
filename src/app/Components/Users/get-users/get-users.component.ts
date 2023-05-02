import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserApiService } from 'src/app/Service/User/user-api.service';
import { faPencil,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})

export class GetUsersComponent {
  faPen = faPencil;
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(public us:UserApiService, private router:Router) 
  {
  }

  ngOnInit(){
    this.getUser()
  }

  getUser(){
    this.us.getUser().subscribe(data => {this.us.usersList=data});
  }

  // getUser(){
  //   this.us.getUser().subscribe(data => {console.log(data)});
  // }
  
  deleteUser(userId:number){
    this.us.deleteUser(userId).subscribe(()=>{this.getUser();});
  }

  

}
