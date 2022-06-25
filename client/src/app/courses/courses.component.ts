import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../app.module';
import {LoginService} from '../login.service'
import {SingalrService} from '../services/singalr.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList: Course[] = [];
  selectedCourse = new FormControl('', Validators.required);
  isSelected : boolean = false;
  constructor(private loginService: LoginService, private signalrService: SingalrService) { }

  ngOnInit(): void {
    this.courseList = this.loginService.currentUser.studentCourses;
  }

  courseSelectedFunction ():void {
    this.isSelected = true;
  }

}
