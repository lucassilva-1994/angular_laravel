import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsFormComponent } from './cars/cars-form/cars-form.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  
  {
    path: 'cars/add',
    component: CarsFormComponent,
    title: 'Adicionar carros'
  },
  {
    path: 'cars/list',
    component: CarsListComponent,
    title: 'Listagem de carros'
  },
  {
    path: 'edit/:id',
    component: CarsFormComponent,
    title: 'Editar carro'
  },
  { path: 'schools', loadChildren: () => import('./components/schools/schools.module').then(m => m.SchoolsModule) },
  { path: 'employees', loadChildren: () => import('./components/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'students', loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
