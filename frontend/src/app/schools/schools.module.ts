import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    SchoolsComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,NgxMaskPipe
  ],
  providers:[provideNgxMask()]
})
export class SchoolsModule { }
