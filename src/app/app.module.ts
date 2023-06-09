import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';

import { GetDoctorsComponent } from './Components/Doctors/get-doctors/get-doctors.component';
import { AddDoctorsComponent } from './Components/Doctors/add-doctors/add-doctors.component';

import { GetUsersComponent } from './Components/Users/get-users/get-users.component';
import { AddUsersComponent } from './Components/Users/add-users/add-users.component';

import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { GetPatientComponent } from './Components/Patient/get-patient/get-patient.component';
import { PatDoctorComponent } from './Components/Patient/pat-doctor/pat-doctor.component';

import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctors/doctor-dashboard/doctor-dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';

import { DashboardHomeComponent } from './Components/dashboard-home/dashboard-home.component';
import { UpdatePatientComponent } from './Components/Patient/update-patient/update-patient.component';
import { UpdateDoctorComponent } from './Components/Doctors/update-doctor/update-doctor.component';
import { BookAppointmentComponent } from './Components/Appointment/book-appointment/book-appointment.component';
import { ShowAppointmentComponent } from './Components/Appointment/show-appointment/show-appointment.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GenerateBillComponent } from './Components/Bills/generate-bill/generate-bill.component';
import { ShowBillComponent } from './Components/Bills/show-bill/show-bill.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AddPxComponent } from './Components/Prescription/add-px/add-px.component';
import { GetPxComponent } from './Components/Prescription/get-px/get-px.component';
import { CheckAppStatusComponent } from './Components/Appointment/check-app-status/check-app-status.component';
import { GetAppointmentComponent } from './Components/Doctors/get-appointment/get-appointment.component';
@NgModule({
  declarations: [
    AppComponent,
    GetDoctorsComponent,AddDoctorsComponent,
    GetUsersComponent,AddUsersComponent,
    GetPatientComponent,AddPatientComponent,PatDoctorComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    DashboardHomeComponent,
    UpdatePatientComponent,
    UpdateDoctorComponent,
    BookAppointmentComponent,
    ShowAppointmentComponent,
    GenerateBillComponent,
    ShowBillComponent,
    LoginComponent,
    SignupComponent,
    AddPxComponent,
    GetPxComponent,
    CheckAppStatusComponent,
    GetAppointmentComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,MatTableModule,
    FontAwesomeModule,NgToastModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
