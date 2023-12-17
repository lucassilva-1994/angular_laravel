import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsFormComponent } from "./cars-form/cars-form.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../shared/header/header.component";
import { LoadmorebuttonComponent } from "../shared/loadmorebutton/loadmorebutton.component";

@NgModule({
    declarations: [ 
        CarsListComponent,
        CarsFormComponent,
        HeaderComponent,
        LoadmorebuttonComponent
     ],
    exports: [
        CarsListComponent,
        CarsFormComponent,
        HeaderComponent,
        LoadmorebuttonComponent
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