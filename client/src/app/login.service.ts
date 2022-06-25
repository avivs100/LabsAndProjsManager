import { Injectable } from '@angular/core';
import { SingalrService } from './services/singalr.service'
import {Student} from './app.module'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser!: Student;

  constructor(private signalRService: SingalrService) { }

  async login(loginId: string){
    await this.signalRService.login(loginId)
    .then((student)=>{
      this.currentUser = student;
      console.log(student);
    });
  }

  async register(id: string, firstName: string, lastName: string): Promise<Student>
  {
     return await this.signalRService.register(id, firstName, lastName).then(student => this.currentUser = student)
     .catch(err=> console.log(err));
  }
}
