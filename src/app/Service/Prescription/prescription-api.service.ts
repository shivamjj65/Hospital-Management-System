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
  billUrl:string='https://localhost:7287/api/Bills';
  prescriptionUrl:string='https://localhost:7287/api/Prescriptions';
  appointmentUrl:string='https://localhost:7287/api/Appointments';
  doctorUrl:string='https://localhost:7287/api/Doctors';
  patientUrl:string='https://localhost:7287/api/Patients';
  userUrl:string='https://localhost:7287/api/Users';

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
