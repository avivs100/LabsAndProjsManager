import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login.service';
import { Course, Student } from '../app.module'
import { SingalrService } from '../services/singalr.service';

@Component({
  selector: 'app-overall-grades',
  templateUrl: './overall-grades.component.html',
  styleUrls: ['./overall-grades.component.css']
})


export class OverallGradesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'grade'];
  dataSource = new MatTableDataSource<Course>();
  courses: Course[] = [];

  courseControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  avarageScore: number;
  numericFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*.[0-9]*$"),
  ]);
  textFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private loginService: LoginService, private signalRService: SingalrService) {
    this.dataSource.data = []
    this.avarageScore = 0;
  }

  ngOnInit(): void {
    this.dataSource.data = []
    this.dataSource.data = this.initCourses();
    this.courses =this.initCourses();
    if (this.dataSource.data != undefined)
      this.calculateAvarage();
  }

  initCourses(): Course[] {
    return this.loginService.currentUser?.studentCourses;
  }  

  calculateAvarage() 
  {
    let sum = 0;
    let numberOffSubmissions = 0;
    this.avarageScore = 0;
    for( var j = 0; j < this.courses.length; j++ )
    {
      sum += this.courses[j].grade;
    }
    if (this.courses.length!=0)
      sum /= this.courses.length; 
    this.avarageScore = sum;
  }
}

