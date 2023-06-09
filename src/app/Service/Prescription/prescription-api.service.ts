import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Appointment, Doctor, Patient, Prescription, User } from 'src/app/Models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionApiService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private myhttp:HttpClient) { }
  billUrl:string='https://hospitalmanagementsystemapi.azurewebsites.net/api/Bills';
  prescriptionUrl:string='https://hospitalmanagementsystemapi.azurewebsites.net/api/Prescriptions';
  appointmentUrl:string='https://hospitalmanagementsystemapi.azurewebsites.net/api/Appointments';
  doctorUrl:string='https://hospitalmanagementsystemapi.azurewebsites.net/api/Doctors';
  patientUrl:string='https://hospitalmanagementsystemapi.azurewebsites.net/api/Patients';
  userUrl:string='https://hospitalmanagementsystemapi.azurewebsites.net/api/Users';

  dt:any;
listpres:any[]=[];
  billlData:any[]=[];
  //listBill:Bill[]=[];

  listAppointment:Appointment[]=[];
  listAppointmentId:Appointment[]=[];
  listDoctor:Doctor[]=[];
  listPatient:Patient[]=[];
  listUser:User[]=[];

  prescriptionData:Prescription=new Prescription();
  appointmentData:Appointment=new Appointment();
  doctorData:Doctor=new Doctor();
  patientData:Patient=new Patient();

  savePrescription(){
    return this.myhttp.post(this.prescriptionUrl,this.prescriptionData);
  }
  updatePrescription(){
    return this.myhttp.put(`${this.prescriptionUrl}/${this.prescriptionData.id}`,this.prescriptionData);
  }

  getPrescription():Observable<any>{
    return this.myhttp.get<any>(this.prescriptionUrl);
  }

  getAppointment():Observable<any>{
    return this.myhttp.get<any>(this.appointmentUrl);
  }
  
  getPatient():Observable<any>{
    return this.myhttp.get<any>(this.patientUrl);
  }
  getPatient1(val:number):Observable<any>{
    return this.myhttp.get<any>(this.patientUrl+'/'+val);
  }

  deletePrescription(id:number){
    return this.myhttp.delete(`${this.prescriptionUrl}/${id}`);
  }
}
