import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {
  options: any;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    const xCoursesNames: string[] = [];
    const labsArray: number[] = [];
    const projectsArray: number[] = [];

    this.loginService.currentUser.studentCourses.forEach(course => xCoursesNames.push(course.name))
    for(let i = 0;i<this.loginService.currentUser.studentCourses.length;i++){
      let sumLabs = 0;
      let sumProjects = 0;
      this.loginService.currentUser.studentCourses[i].labs.forEach(lab => sumLabs+=lab.score )
      if(this.loginService.currentUser.studentCourses[i].labs.length==0){labsArray.push(0);}
      else labsArray.push(sumLabs/this.loginService.currentUser.studentCourses[i].labs.length);
      this.loginService.currentUser.studentCourses[i].projects.forEach(project => sumProjects += project.score)
      if(this.loginService.currentUser.studentCourses[i].labs.length==0){labsArray.push(0);}
      else projectsArray.push(sumProjects/this.loginService.currentUser.studentCourses[i].labs.length);
      
    }


    this.options = {
      legend: {
      },
      tooltip: {},
      xAxis: {
        data: xCoursesNames,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Lab Grades',
          type: 'bar',
          data: labsArray,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'Project Grades',
          type: 'bar',
          data: projectsArray,
          animationDelay: (idx: number) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }

}
