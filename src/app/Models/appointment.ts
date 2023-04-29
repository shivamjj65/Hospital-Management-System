export class AppointmentClass {
    id:number=0;
    patientId:number=0;
    doctorId:number=0;
    appointmentDate:any;
    status:any=null;
}

export class UsersClass {
    id:number=0;
    email:string='';
    password:string='';
    role:string='';
   
}

export class PatientsClass {
    id:any;
    name:string='';
    gender:string='';
    dateOfBirth:any;
    phoneNumber:any;
    address:string='';
}
export class DoctorsClass {
    id:any;
    name:string='';
    gender:string='';
    dateOfBirth:any;
    phoneNumber:any;
    address:string='';
    specialization:string='';
    fees:number=0;

}
