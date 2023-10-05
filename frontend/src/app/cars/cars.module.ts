import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsFormComponent } from "./cars-form/cars-form.component";
import { MessageComponent } from "./message/message.component";

@NgModule({
    declarations: [ 
        CarsListComponent,
        CarsFormComponent,
        MessageComponent
     ],
    exports: [
        CarsListComponent,
        CarsFormComponent
     ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class CarsModule{

}