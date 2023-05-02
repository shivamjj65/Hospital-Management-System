export class Bill {
    id:number;
    appointmentId:number=0;
    patientId:number;
   patientName:string;
    doctorId:number;
    
    billDate:any;
    amount:number;
  
  }
  export class Appointment{
    id:number;
    patientId:number;
    doctorId:number;
    appointmentDate:any;
    status:boolean;
  
  }
  
  export class Doctor{
    id:number;
    name:string;
    gender:string;
    dateOfBirth:any;
    phonenumber:any;
    Address:string;
    specialization:string;
    fees:number;
    userId:number;
  }
  
  export class Patient{
    id:number;
    name:string;
    gender:number;
    dateOfBirth:any;
    phoneNumber:number;
    address:string;
  }
  
  export class Prescription{
    id:number=0;
    appointmentId:number;
    doctorId:number;
    patientId:number;
    prescriptionDate:any;
    prescriptionDetails:any;
    
  }
  export class User{
    id:number;
    email:string;
    password:string;
    role:string
  }
  
  

