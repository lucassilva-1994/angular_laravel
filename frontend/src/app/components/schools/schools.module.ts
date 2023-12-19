import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { SchoolsRoutingModule } from './schools-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    ReactiveFormsModule,
    PipesModule,
    FormsModule,
    NgxMaskDirective,NgxMaskPipe,
    SharedModule
  ],
  providers:[provideNgxMask()]
})
export class SchoolsModule { }
