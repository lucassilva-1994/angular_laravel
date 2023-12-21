import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/users/signin/signin.component';

const routes: Routes = [
  {
    path:'',
    component: SigninComponent
  },
  { path: 'schools', loadChildren: () => import('./components/schools/schools.module').then(m => m.SchoolsModule) },
  { path: 'employees', loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'students', loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule) },
  { path: 'jobs', loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
