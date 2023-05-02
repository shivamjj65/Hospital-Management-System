import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientApiService } from 'src/app/Service/Patient/patient-api.service';
import { faPencil, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css']
})


export class GetPatientComponent {
  faPen = faPencil;
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(public ps: PatientApiService, private router: Router) {
    this.getPatient()
  }

  ngOnInit() {
    this.getPatient()
  }

  getPatient() {
    this.ps.getPatient().subscribe(data => { this.ps.patientsList = data });
  }

  addPatient() {
    this.router.navigate(['admin/add-patient']);
  }


  updatePatient(item: Patient) {
    this.ps.patientData = item;
    this.getPatient();
    this.router.navigate(['admin/update-patient']);
  }

  deletePatient(patId: number) {
    if (confirm('Are you really want to delete this data')) {
      this.ps.deletePatient(patId).subscribe(() => { this.getPatient(); });
    }
  }
}
