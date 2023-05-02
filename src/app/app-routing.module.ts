import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth-guard';

import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctors/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard.component';
import { DashboardHomeComponent } from './Components/dashboard-home/dashboard-home.component';

import { GetDoctorsComponent } from './Components/Doctors/get-doctors/get-doctors.component';
import { AddDoctorsComponent } from './Components/Doctors/add-doctors/add-doctors.component';
import { UpdateDoctorComponent } from './Components/Doctors/update-doctor/update-doctor.component';
import { GetAppointmentComponent } from './Components/Doctors/get-appointment/get-appointment.component';

import { GetPatientComponent } from './Components/Patient/get-patient/get-patient.component';
import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './Components/Patient/update-patient/update-patient.component';
import { CheckAppStatusComponent } from './Components/Appointment/check-app-status/check-app-status.component';

import { GetUsersComponent } from './Components/Users/get-users/get-users.component';
import { AddUsersComponent } from './Components/Users/add-users/add-users.component';

import { PatDoctorComponent } from './Components/Patient/pat-doctor/pat-doctor.component';
import { BookAppointmentComponent } from './Components/Appointment/book-appointment/book-appointment.component';
import { ShowAppointmentComponent } from './Components/Appointment/show-appointment/show-appointment.component';

import { GenerateBillComponent } from './Components/Bills/generate-bill/generate-bill.component';
import { ShowBillComponent } from './Components/Bills/show-bill/show-bill.component';

import { AddPxComponent } from './Components/Prescription/add-px/add-px.component';
import { GetPxComponent } from './Components/Prescription/get-px/get-px.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  
  { path: 'admin', component: AdminDashboardComponent,canActivate:[AuthGuard],
    children:[
      {path:'home',component:DashboardHomeComponent,canActivate:[AuthGuard]},
      {path:'get-patient',component:GetPatientComponent,canActivate:[AuthGuard]},
      {path:'add-patient',component:AddPatientComponent,canActivate:[AuthGuard]},
      {path:'update-patient',component:UpdatePatientComponent,canActivate:[AuthGuard]},
      {path:'get-doctor',component:GetDoctorsComponent,canActivate:[AuthGuard]},
      {path:'add-doctor',component:AddDoctorsComponent,canActivate:[AuthGuard]},
      {path:'update-doctor',component:UpdateDoctorComponent,canActivate:[AuthGuard]},
      {path:'get-user',component:GetUsersComponent,canActivate:[AuthGuard]},
      {path:'book-app',component:BookAppointmentComponent,canActivate:[AuthGuard]},
      {path:'show-app',component:ShowAppointmentComponent,canActivate:[AuthGuard]},
      {path:'add-bill',component:GenerateBillComponent,canActivate:[AuthGuard]},
      {path:'get-bill',component:ShowBillComponent,canActivate:[AuthGuard]}
    ]
  },
  

  { path: 'doctor', component: DoctorDashboardComponent,canActivate:[AuthGuard],
    children:[
      {path:'home',component:DashboardHomeComponent,canActivate:[AuthGuard]},
      {path:'get-patient',component:GetPatientComponent,canActivate:[AuthGuard]},
      {path:'show-app',component:GetAppointmentComponent,canActivate:[AuthGuard],},
      {path:'add-px',component:AddPxComponent,canActivate:[AuthGuard]}
      ]
  },


  { path: 'patient', component: PatientDashboardComponent,canActivate:[AuthGuard],
    children:[
      {path:'home',component:DashboardHomeComponent,canActivate:[AuthGuard]},
      {path:'get-doctor',component:PatDoctorComponent,canActivate:[AuthGuard]},
      {path:'book-app',component:BookAppointmentComponent,canActivate:[AuthGuard]},
      {path:'check-app',component:CheckAppStatusComponent,canActivate:[AuthGuard]},
      {path:'show-bill',component:ShowBillComponent,canActivate:[AuthGuard]},
      {path:'get-px',component:GetPxComponent,canActivate:[AuthGuard]}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
