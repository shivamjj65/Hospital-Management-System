import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersClass,AppointmentClass,DoctorsClass,PatientsClass } from 'src/app/Models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService {
  constructor(private http:HttpClient) { }
  
  appData:AppointmentClass=new AppointmentClass();//for post/insert  data
  listAppClass:AppointmentClass[]=[]; //for getting Appointment data list
  
  doctorData:DoctorsClass=new DoctorsClass();
  listDoctorsClass:DoctorsClass[]=[];
  
  patientData:PatientsClass=new PatientsClass();
  listPatientsClass:PatientsClass[]=[];
  // userData:UsersClass=new UsersClass();
  // listUsersClass:UsersClass[]=[];

  appointmentData:any=[];

  baseUrl = 'https://localhost:7287/api/Appointments';
  doctorUrl='https://localhost:7287/api/Doctors';
  approveUrl='https://localhost:7287/api/Appointments/approve'
  rejectUrl='https://localhost:7287/api/Appointments/reject'
  getPatientUrl='https://localhost:7287/api/Patients'

  getAppointments(){
    return this.http.get(this.baseUrl);
  }

  getDoctors():Observable<DoctorsClass[]>{
    return this.http.get<DoctorsClass[]>(this.doctorUrl);

  }
  getPatients():Observable<PatientsClass[]>{
    return this.http.get<PatientsClass[]>(this.getPatientUrl);
  }

  
bookAppointment(appData:AppointmentClass){
  return this.http.post(this.baseUrl,this.appData);
}
updateAppointment(){
  return this.http.put(`${this.baseUrl}/${this.appData.id}`,this.appData);
}
  
deleteAppointment(id:any){
  return this.http.delete(`${this.baseUrl}/${id}`);
}

approveAppointment(id:any){
  return this.http.post(`${this.approveUrl}/${id}`,{});
}

rejectAppointment(id:any){
  return this.http.post(`${this.rejectUrl}/${id}`,{});
}

}
