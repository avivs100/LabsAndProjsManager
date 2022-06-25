import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  firstName = "";
  lastName = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.firstName = this.loginService.currentUser.firstName;
    this.lastName = this.loginService.currentUser.lastName;
  }

}
