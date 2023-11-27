import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../car";
import { CarsService } from "../cars.service";
import { ActivatedRoute } from "@angular/router";

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

    errors = [];
    message: string = '';
    class: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private carsService: CarsService,
        private route: ActivatedRoute
    ) {

    }
    ngOnInit(): void {
        // this.route.params.subscribe(
        //     (params: any) => {
        //         const id = params['id'];
        //         console.log(id)
        //     }
        // );
    }

    store() {
        this.message = "Enviando registro...";
        this.class = "secondary";
        const cars = this.carsForm.getRawValue() as Car;
        this.carsService.store(cars)
            .subscribe(response => {
                this.message = "Carro cadastrado com sucesso.";
                this.class = "success";
                this.errors = [];
                this.carsForm.reset();
            }, error => {
                this.errors = Object.values(error.error.errors) 
                this.message = '';
                this.class = '';
            });
    }
}