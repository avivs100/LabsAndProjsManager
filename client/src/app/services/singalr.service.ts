import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr"
import { Student, Course } from "../app.module"

@Injectable({
  providedIn: 'root'
})
export class SingalrService {

  private hubConnection!: signalR.HubConnection;

  constructor() { }

  public async startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44349/score')
      .build();
    this.hubConnection.start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('ERROR: ' + err));
  }

  async login(id: string): Promise<Student> {
    return this.hubConnection?.invoke("Login", id);
  }

  async register(id: string, firstName: string, lastName: string) {
    return this.hubConnection?.invoke("Register", id, firstName, lastName);
  }
}

