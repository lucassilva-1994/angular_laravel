import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PhonePipe } from 'src/app/pipes/phone.pipe';
import { CnpjPipe } from 'src/app/pipes/cnpj.pipe';
import { MessageComponent } from 'src/app/shared/message/message.component';


@NgModule({
  declarations: [
    SchoolsComponent,
    ListComponent,
    FormComponent,
    MessageComponent,
    CnpjPipe,
    PhonePipe
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
