import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctors/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard.component';
import { GetDoctorsComponent } from './Components/Doctors/get-doctors/get-doctors.component';
import { AddDoctorsComponent } from './Components/Doctors/add-doctors/add-doctors.component';
import { GetPatientComponent } from './Components/Patient/get-patient/get-patient.component';
import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { GetUsersComponent } from './Components/Users/get-users/get-users.component';
import { AddUsersComponent } from './Components/Users/add-users/add-users.component';
import { PatDoctorComponent } from './Components/Patient/pat-doctor/pat-doctor.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';

const routes: Routes = [
  { path: 'admin/dashboard', component: AdminDashboardComponent,
    children:[
      {path:'home',component:AdminHomeComponent},
      {path:'get-patient',component:GetPatientComponent},
      {path:'add-patient',component:AddPatientComponent},
      {path:'get-doctor',component:GetDoctorsComponent},
      {path:'add-doctor',component:AddDoctorsComponent},
      {path:'get-user',component:GetUsersComponent},
      // {path:'get-appointment',component:GetAppointmentComponent},
      // {path:'get-bills',component:GetBillsComponent}
    ]
  },
  { path: 'admin', component: AdminDashboardComponent,
    children:[
      {path:'get-patient',component:GetPatientComponent},
      {path:'add-patient',component:AddPatientComponent},
      {path:'get-doctor',component:GetDoctorsComponent},
      {path:'add-doctor',component:AddDoctorsComponent},
      {path:'get-user',component:GetUsersComponent},
      // {path:'get-appointment',component:GetAppointmentComponent},
      // {path:'get-bills',component:GetBillsComponent}
    ]
  },
  


  { path: 'doctor/dashboard', component: DoctorDashboardComponent,
    children:[
      {path:'get-patient',component:GetPatientComponent},
      // {path:'get-appointment',component:GetAppointmentComponent}
      ]
  },
  { path: 'doctor', component: DoctorDashboardComponent,
    children:[
      {path:'get-patient',component:GetPatientComponent},
      // {path:'get-appointment',component:GetAppointmentComponent}
      ]
  },



  { path: 'patient/dashboard', component: PatientDashboardComponent,
    children:[
      {path:'get-doctor',component:PatDoctorComponent},
      // {path:'request-appointment',component:GetAppointmentComponent},
      // {path:'get-prescription',component:GetPrescriptionComponent},
      // {path:'get-bills',component:GetBillComponent}
      ]
  },
  { path: 'patient', component: PatientDashboardComponent,
    children:[
      {path:'get-doctor',component:PatDoctorComponent},
      // {path:'request-appointment',component:GetAppointmentComponent},
      // {path:'get-prescription',component:GetPrescriptionComponent},
      // {path:'get-bills',component:GetBillComponent}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
