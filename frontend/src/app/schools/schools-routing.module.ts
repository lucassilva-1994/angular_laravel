import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsComponent } from './schools.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { 
    path: '', 
    component: SchoolsComponent,
    title: 'Escolas'
  },
  {
    path:'list',
    component: ListComponent,
    title: 'Listagem'
  },
  {
    path:'add',
    component: FormComponent,
    title: 'Adicionar'
  },
  {
    path:'edit/:id',
    component: FormComponent,
    title: 'Editar'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
