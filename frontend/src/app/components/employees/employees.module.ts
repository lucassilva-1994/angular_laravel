import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PhonePipe } from 'src/app/pipes/phone.pipe';
import { Cpfipe } from 'src/app/pipes/cpf.pipe';


@NgModule({
  declarations: [
    EmployeesComponent,
    FormComponent,
    ListComponent,
    PhonePipe,
    Cpfipe
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,NgxMaskPipe,
  ],
  providers:[provideNgxMask()]
})
export class EmployeesModule { }
