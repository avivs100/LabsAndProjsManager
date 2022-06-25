import { Component } from '@angular/core';
import { SingalrService } from './services/singalr.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public signalRService: SingalrService, private router: Router) { }
  
  ngOnInit() {
    this.startConnection();
    
  }

  async startConnection(){
    await this.signalRService.startConnection();
    this.router.navigate(['/login']);  
  }


}
