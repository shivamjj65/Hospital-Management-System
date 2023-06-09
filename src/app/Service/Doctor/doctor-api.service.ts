import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {

  constructor(private http:HttpClient) { }
  url = "https://hospitalmanagementsystemapi.azurewebsites.net/api/Doctors"

  // get list of doctors data and store into doctorsList
  doctorsList:Doctor[]=[]; //for getting list of doctor 
  
  getDoctor():Observable<Doctor[]>
  {// api to fetch data and display in table
    return this.http.get<Doctor[]>(this.url);
  }

  // When new doctor to be added
  // get data from form and store into doctorData and post it into db via api
  doctorData:Doctor = new Doctor();
  postDoctor(){
    return this.http.post('https://hospitalmanagementsystemapi.azurewebsites.net/api/Doctors',this.doctorData).subscribe(
      (response) => {
        console.log('response received',response);
      },
      (error) => {
        if(error.status==409)
        {
          alert("Doctor data already exists !")
        } 
        console.error('error caught in component',error.status);   
      }
    );
  }
  

  updatedDoctorData:Doctor = new Doctor();
  updateDoctor(){
    return this.http.put("https://hospitalmanagementsystemapi.azurewebsites.net/api/Doctors/"+this.updatedDoctorData.id,this.updatedDoctorData).subscribe(
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

  deleteDoctor(docId:number){
    return this.http.delete(`${this.url}/${docId}`);
  }
}
