import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router:Router){}
  
  OnLogin(UserName:string,password:string){
    if(UserName.length>0 && password.length>0 ){
      this.router.navigate(['/home']);
    }
  }
}
