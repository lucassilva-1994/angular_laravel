import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../car";
import { CarsService } from "../cars.service";

@Component({
    selector: 'app-cars-form',
    templateUrl: './cars-form.component.html'
})
export class CarsFormComponent {
    carsForm: FormGroup = this.formBuilder.group({
        brand: ['', Validators.required],
        color: ['', Validators.required],
        year: ['', Validators.required],
        model: ['', Validators.required]
    });

    message: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private carsService: CarsService
    ) {

    }
    ngOnInit(): void { }

    store() {
        const cars = this.carsForm.getRawValue() as Car;
        this.carsService.store(cars)
            .subscribe(() => {
                this.message = "Carro cadastrado com sucesso.";
                this.carsForm.reset();
            });
    }
}