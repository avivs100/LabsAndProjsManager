import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  loginId: string = "";
  studentFirstName = "";
  studentLastName = "";
  IdFormControl = new FormControl('', Validators.required);
  firstNameFormControl = new FormControl('', Validators.required);
  lastNameFormControl = new FormControl('', Validators.required);
  constructor(private loginService: LoginService, private router: Router) { }

  async register(){
    await this.loginService.register(this.loginId, this.studentFirstName, this.studentLastName)
    .then((res)=>{
      if (res != null)
      {
        alert('Registraction process end successfully');
        this.router.navigate(['/login']);
      }
      else{
        alert('Error');
      }
    })
    .catch((err) => console.log(err));
  }
}
