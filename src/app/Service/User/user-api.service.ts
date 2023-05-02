import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }
  url = "https://localhost:7287/api/Users"
  updateUrl = "https://localhost:7287/api/Users/role";
   
  // get list of User data and store into usersList
  usersList:User[]=[]; //for getting list user 

   getUser():Observable<User[]>
   {// api to fetch data and display in table
    return this.http.get<User[]>(this.url);
   }

   deleteUser(userId:number)
   {
    return this.http.delete(`${this.url}/${userId}`);
   }

  updatedUser:User = new User();
  updateRole(){
    return this.http.post("https://localhost:7287/api/Users/role"+this.updatedUser.id,this.updatedUser).subscribe(
      (response) => {                           //Next callback
        console.log('Updated',response);
        alert('Data Updated');
      },
      (error) => {    
        if(error.status==405)
        {
          alert("Update Failed !")
        }                          //Error callback
        console.error('Error caught in component',error.status);
      }
    );
  }
}
