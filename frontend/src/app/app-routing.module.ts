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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
