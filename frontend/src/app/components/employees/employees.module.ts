import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    PipesModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,NgxMaskPipe,
  ],
  providers:[provideNgxMask()]
})
export class EmployeesModule { }
