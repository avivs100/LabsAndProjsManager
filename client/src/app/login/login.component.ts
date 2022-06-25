import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginId: string = "";
  constructor(private loginService: LoginService, private router: Router) { }
  
  Signup(){
    this.router.navigate(['/register']);
  }

  async login(){
  
    await this.loginService.login(this.loginId)
    .then(()=>{
      if (this.loginService.currentUser != null)
      {
        this.router.navigate(['/main/welcome']);
        return;
      }
    });
  }

}
