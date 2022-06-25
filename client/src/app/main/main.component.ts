import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  firstName = "";
  lastName = "";
  constructor(private loginService: LoginService, private router: Router){}
  

  ngOnInit(): void {
    this.firstName = this.loginService.currentUser.firstName;
    this.lastName = this.loginService.currentUser.lastName;
  }
  ExitFunction(){
    this.router.navigate(['/login']);
  }

}
