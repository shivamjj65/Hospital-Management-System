import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {
  constructor(private http:HttpClient) { }
  url = "https://localhost:7287/api/Patients"

  // get list of Patient data and store into patientsList
  patientsList:Patient[]=[]; //for getting list patient 
  
  getPatient():Observable<Patient[]>
  {// api to fetch data and display in table
    return this.http.get<Patient[]>(this.url);
  }

  // When new Patient to be added
  // get data from form and store into patientData and post it into db via api
  patientData:Patient = new Patient();
  postPatient(){
    return this.http.post('https://localhost:7287/api/Patients',this.patientData).subscribe(
      (response) => {                           //Next callback
        console.log('response received',response);
      },
      (error) => {    
        if(error.status==409)
        {
          alert("Patient data already exists !")
        }                          //Error callback
        console.error('error caught in component',error.status);
      }
    );
  }

  updatePatient():Observable<Patient>{
    return this.http.patch<Patient>(`${this.url}/${this.patientData.id}`,this.patientData);
  }

  deletePatient(patId:number){
    return this.http.delete(`${this.url}/${patId}`);
  }
}
