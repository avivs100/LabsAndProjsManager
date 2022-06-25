import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverallGradesComponent } from './overall-grades/overall-grades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HistogramComponent } from './histogram/histogram.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { RegisterComponent } from './register/register.component';
import { DetailsToPhotoComponent } from './details-to-photo/details-to-photo.component';
@NgModule({
  declarations: [
    AppComponent,
    OverallGradesComponent,
    CoursesComponent,
    LoginComponent,
    MainComponent,
    AboutComponent,
    WelcomeComponent,
    HistogramComponent,
    RegisterComponent,
    DetailsToPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


export interface Lab{
  typeOfSubmission: string,
  score: number,
  submissionNumber: number
}

export interface Project{
  typeOfSubmission: string,
  score: number,
  submissionNumber: number
}

export interface Course{
  id: number,
  name: string,
  //points: number,
  grade:number,
  labs: Lab[],
  projects: Project[],
}

export interface Student{
  id: string,
  firstName: string,
  lastName: string,
  studentCourses: Course[]
}