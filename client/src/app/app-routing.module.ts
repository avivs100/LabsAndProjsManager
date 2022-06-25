import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HistogramComponent } from './histogram/histogram.component';
import {OverallGradesComponent} from './overall-grades/overall-grades.component'
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, children:[
    {path: 'grades', component: OverallGradesComponent},
    {path: 'manage', component: CoursesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'histogram', component:HistogramComponent}
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
