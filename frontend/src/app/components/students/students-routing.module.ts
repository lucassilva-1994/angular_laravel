import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    title: 'Estudantes'
  },
  {
    path:'add',
    component: FormComponent,
    title:'Novo'
  },
  {
    path:'edit/:id',
    component:FormComponent,
    title:'Atualizar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
