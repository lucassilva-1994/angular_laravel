import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,NgxMaskPipe,
  ],
  providers:[provideNgxMask()]
})
export class StudentsModule { }
