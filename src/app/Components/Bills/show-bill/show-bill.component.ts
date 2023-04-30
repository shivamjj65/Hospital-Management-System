import { Component, OnInit } from '@angular/core';
import { BillApiService } from 'src/app/Service/Bill/bill-api.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/Models/bill';
import { faPencil,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-bill',
  templateUrl: './show-bill.component.html',
  styleUrls: ['./show-bill.component.css']
})
export class ShowBillComponent implements OnInit{
  faPen = faPencil;
  faTrash = faTrash;
  faPlus = faPlus;
  
  datepipe: any;
  total: any;


  constructor(public billServices:BillApiService,public datePipe:DatePipe, private router:Router){}
  
  
  ngOnInit(): void {
    this.billServices.getBill().subscribe(data=>{
      this.billServices.listBill1=data;
      console.log(this.total);
    });
  }

  addBill(){
    this.router.navigate(['admin/add-bill']);
  }

  populateBill(selectedBill:Bill){
    console.log('working');
   
   let df=this.datePipe.transform(selectedBill.billDate,'yyyy-MM-dd');
   selectedBill.billDate=df;
   console.log('tranform',selectedBill.billDate);
    this.billServices.billData=selectedBill;
    console.log("after transform: ",selectedBill.billDate);
   }

   delete(id:number){
    if(confirm('Are you really want to delete this item')){
      this.billServices.deleteBill(id).subscribe(data=>{
        console.log('Record deleted...');
        this.billServices.getBill().subscribe(data=>{
          this.billServices.listBill1=data;
        });
      },
      err=>{
        console.log('Record not deleted...');
        
      });
    }
   }
}
