import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { CarsService } from "./cars.service";

@Component({
    selector: 'app-car',
    templateUrl: './cars.component.html',
})
export class CarsComponent implements OnInit{
    carsForm:FormGroup = this.formBuilder.group({
        brand: ['', Validators.required],
        color: ['', Validators.required],
        year: ['', Validators.required],
        model: ['', Validators.required]
    });

    message:string = '';

    constructor(
        private formBuilder: FormBuilder,
        private carsService: CarsService
    ){

    }
    ngOnInit(): void {}

    store(){
        const brand = this.carsForm.get('brand')?.value;
        const model = this.carsForm.get('model')?.value;
        const color = this.carsForm.get('color')?.value;
        const year = this.carsForm.get('year')?.value;
        this.carsService.store(brand, model, color, year)
            .subscribe(()=> {
                this.message = "Carro cadastrado com sucesso.";
                this.carsForm.reset();
            });
    }
}