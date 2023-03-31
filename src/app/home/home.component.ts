import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GetuserdataService } from '../getuserdata.service';

//import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
declare var window:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
  first:any;
  disable=true;
  employees:any=[];
  formModal:any;
  emp={id:0,name:'',department:'',contact:0, email:''}
  ngOnInit():void{
    this.getuserdata.getEmployees()
    .subscribe((data:any) => {
      this.employees = data;
    }); 

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
   
   
  }
  
  constructor(private router:Router,private getuserdata:GetuserdataService,private http:HttpClient){}
  
  public OnLogout() {
    if((confirm('Are you sure you want to Logout?'))){
      this.router.navigate(['/']);
    } 
  }

  OnDelete(id:number){
    if((confirm('Are you sure you want to delete this record?'))){
      window.location.reload();
      this.http.delete('https://localhost:7251/api/Employee/'+id+'').subscribe();
    }
  
    
  }
  saveSomeThing(){
    this.formModal.hide();
    } 
  OnEdit(id:number){
    this.formModal.show();
  }

  OnAdd(){
    this.formModal.show();
    this.disable=false;
  }
  //
  getUserFormData(id:string,name:string,department:string,contact:string,email:string){
    console.warn(this.emp);
    this.emp={
      id:+id,
      name:name,
      department:department,
      contact:+contact,
      email:email

    }
    console.warn(this.emp);
    this.getuserdata.saveUsers(this.emp).subscribe((result)=>{
      console.warn(result);
    })
    window.location.reload();
  }

  closedialog(){
    this.formModal.hide();
    this.disable=true;
  }
}


