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

}
