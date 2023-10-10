import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsFormComponent } from "./cars-form/cars-form.component";
import { MessageComponent } from "./message/message.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../shared/header/header.component";

@NgModule({
    declarations: [ 
        CarsListComponent,
        CarsFormComponent,
        MessageComponent,
        HeaderComponent
     ],
    exports: [
        CarsListComponent,
        CarsFormComponent,
        HeaderComponent
     ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ]
})
export class CarsModule{

}