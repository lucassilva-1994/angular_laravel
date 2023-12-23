import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/users/signin/signin.component';
import { authGuard } from './core/auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    component: SigninComponent
  },
  { 
    path: 'schools', 
    loadChildren: () => import('./components/schools/schools.module').then(m => m.SchoolsModule),
    canActivate:[authGuard]
  },
  { 
    path: 'employees', 
    loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule),
    canActivate:[authGuard]
  },
  { 
    path: 'students', 
    loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule),
    canActivate:[authGuard]
  },
  { 
    path: 'jobs', 
    loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
