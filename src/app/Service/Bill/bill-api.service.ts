import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment, Bill, Doctor, Patient, Prescription, User } from 'src/app/Models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillApiService {

  listBill1: any[] = [];

  constructor(private myhttp: HttpClient) { }

  billUrl: string = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Bills';
  prescriptionUrl: string = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Prescriptions';
  appointmentUrl: string = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Appointments';
  doctorUrl: string = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Doctors';
  patientUrl: string = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Patients';
  userUrl: string = 'https://hospitalmanagementsystemapi.azurewebsites.net/api/Users';


  billlData: any[] = [];
  //listBill:Bill[]=[];
  listPrescription: Prescription[] = [];
  listAppointment: Appointment[] = [];
  listDoctor: Doctor[] = [];
  listPatient: Patient[] = [];
  listUser: User[] = [];

  patient: Patient = new Patient();
  doctor: Doctor = new Doctor();
  doctorData: Doctor = new Doctor();
  billData: Bill = new Bill(); // for post and insert
  appointmentData: Appointment = new Appointment();
  patientData: Patient = new Patient();

  saveBill() {
    return this.myhttp.post(this.billUrl, this.billData);
  }
  updateBill() {
    return this.myhttp.put(`${this.billUrl}/${this.billData.id}`, this.billData);
  }

  getBill(): Observable<any> {
    return this.myhttp.get<any>(this.billUrl);
  }

  getAppointment(): Observable<any> {
    return this.myhttp.get<any>(this.appointmentUrl);
  }

  deleteBill(id: number) {
    return this.myhttp.delete(`${this.billUrl}/${id}`);
  }
}
