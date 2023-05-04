import { Component, OnInit } from '@angular/core';
import { PrescriptionApiService } from 'src/app/Service/Prescription/prescription-api.service';
import { DatePipe } from '@angular/common';
import { Prescription } from 'src/app/Models/prescription';
import { faPencil, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-px',
  templateUrl: './get-px.component.html',
  styleUrls: ['./get-px.component.css']
})
export class GetPxComponent implements OnInit {
  faPen=faPencil;
  faTrash = faTrash;
 
  myval: number;

  constructor(public presServices:PrescriptionApiService, public datePipe:DatePipe ){}


  ngOnInit(): void {
  
   
  }

display(){
  console.log('dis working')
  this.presServices.getPrescription().subscribe(data=>{
    this.presServices.listpres=data.filter((x: { doctorId: number; })=> x.doctorId==this.myval);
  console.log('details',this.myval)
  
  })
}
  populatePres(selectedPres:Prescription){
    console.log('working');
   
    let df=this.datePipe.transform(selectedPres.prescriptionDate,'yyyy-MM-dd');
    selectedPres.prescriptionDate=df;
  
    this.presServices.prescriptionData=selectedPres;
  
   }

   deletePres(id:number){
    if(confirm('Are you really want to delete this item')){
      this.presServices.deletePrescription(id).subscribe(data=>{
       
        this.presServices.getPrescription().subscribe(data=>{
          this.presServices.listpres=data.filter((x: { doctorId: number; })=> x.doctorId==this.myval);
        console.log('details',this.myval)
        })
      },
      err=>{
        console.log('Record not deleted...');
        
      });
    }
   }


}

