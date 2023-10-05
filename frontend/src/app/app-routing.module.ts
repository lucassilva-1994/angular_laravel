import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsFormComponent } from './cars/cars-form/cars-form.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

const routes: Routes = [
  {
    path: 'cars/add',
    component: CarsFormComponent,
    title: 'Adicionar carros'
  },
  {
    path: 'cars/list',
    component: CarsListComponent,
    title: 'Listagem de carros'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
