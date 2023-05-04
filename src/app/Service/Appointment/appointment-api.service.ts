import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersClass,
  AppointmentClass,
  DoctorsClass,
  PatientsClass } from 'src/app/Models/appointment';
  

@Injectable({
  providedIn: 'root',
})
export class AppointmentApiService {
  constructor(private http: HttpClient) { }

  appData: AppointmentClass = new AppointmentClass(); //for post/insert  data
  listAppClass: AppointmentClass[] = []; //for getting Appointment data list

  doctorData: DoctorsClass = new DoctorsClass();
  listDoctorsClass: DoctorsClass[] = [];

  patientData: PatientsClass = new PatientsClass();
  listPatientsClass: PatientsClass[] = [];
  // userData:UsersClass=new UsersClass();
  // listUsersClass:UsersClass[]=[];

  appointmentData: any = [];

  baseUrl = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Appointments';
  doctorUrl = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Doctors';
  approveUrl = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Appointments/approve';
  rejectUrl = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Appointments/reject';
  getPatientUrl = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Patients';

  appointmentByPatiendIdUrl =
    'https://hospitalmanagementsystemapi.azurewebsites.net/api/Appointments/appointmentsByPatientId?patientId=';

  getAppointments() {
    return this.http.get(this.baseUrl);
  }

  getDoctors(): Observable<DoctorsClass[]> {
    return this.http.get<DoctorsClass[]>(this.doctorUrl);
  }
  getPatients(): Observable<PatientsClass[]> {
    return this.http.get<PatientsClass[]>(this.getPatientUrl);
  }

  bookAppointment(appData: AppointmentClass) {
    return this.http.post(this.baseUrl, this.appData);
  }
  updateAppointment() {
    return this.http.put(`${this.baseUrl}/${this.appData.id}`, this.appData);
  }

  deleteAppointment(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  approveAppointment(id: any) {
    return this.http.post(`${this.approveUrl}/${id}`, {});
  }

  rejectAppointment(id: any) {
    return this.http.post(`${this.rejectUrl}/${id}`, {});
  }

  appointmentByPatientId(id: any) {
    return this.http.get(`${this.appointmentByPatiendIdUrl}${id}`);
  }
}
