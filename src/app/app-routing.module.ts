import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctors/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard.component';
import { GetDoctorsComponent } from './Components/Doctors/get-doctors/get-doctors.component';
import { AddDoctorsComponent } from './Components/Doctors/add-doctors/add-doctors.component';
import { GetPatientComponent } from './Components/Patient/get-patient/get-patient.component';
import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './Components/Patient/update-patient/update-patient.component';
import { BookAppComponent } from './Components/Patient/book-app/book-app.component';
import { GetUsersComponent } from './Components/Users/get-users/get-users.component';
import { AddUsersComponent } from './Components/Users/add-users/add-users.component';
import { PatDoctorComponent } from './Components/Patient/pat-doctor/pat-doctor.component';
import { DashboardHomeComponent } from './Components/dashboard-home/dashboard-home.component';
import { UpdateDoctorComponent } from './Components/Doctors/update-doctor/update-doctor.component';
import { BookAppointmentComponent } from './Components/Appointment/book-appointment/book-appointment.component';
import { ShowAppointmentComponent } from './Components/Appointment/show-appointment/show-appointment.component';
import { GenerateBillComponent } from './Components/Bills/generate-bill/generate-bill.component';
import { ShowBillComponent } from './Components/Bills/show-bill/show-bill.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent,
    children:[
      {path:'home',component:DashboardHomeComponent},
      {path:'get-patient',component:GetPatientComponent},
      {path:'add-patient',component:AddPatientComponent},
      {path:'update-patient',component:UpdatePatientComponent},
      {path:'get-doctor',component:GetDoctorsComponent},
      {path:'add-doctor',component:AddDoctorsComponent},
      {path:'update-doctor',component:UpdateDoctorComponent},
      {path:'get-user',component:GetUsersComponent},
      {path:'book-app',component:BookAppComponent},
      {path:'show-app',component:ShowAppointmentComponent},
      {path:'gen-bill',component:GenerateBillComponent},
      {path:'show-bill',component:ShowBillComponent}
    ]
  },
  

  { path: 'doctor', component: DoctorDashboardComponent,
    children:[
      {path:'home',component:DashboardHomeComponent},
      {path:'get-patient',component:GetPatientComponent},
      // {path:'get-appointment',component:GetAppointmentComponent}
      ]
  },


  { path: 'patient', component: PatientDashboardComponent,
    children:[
      {path:'home',component:DashboardHomeComponent},
      {path:'get-doctor',component:PatDoctorComponent},
      {path:'book-app',component:BookAppointmentComponent},
      // {path:'get-prescription',component:GetPrescriptionComponent},
      {path:'gen-bill',component:GenerateBillComponent},
      {path:'show-bill',component:ShowBillComponent}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
