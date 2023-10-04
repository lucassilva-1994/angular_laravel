import { NgModule } from "@angular/core";
import { CarsComponent } from "./cars.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ CarsComponent],
    exports: [ CarsComponent ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class CarsModule{

}