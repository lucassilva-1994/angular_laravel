import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../car";
import { CarsService } from "../cars.service";
import { ActivatedRoute, Router } from "@angular/router";

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
    message:any = '';
    class: string = '';
    edit:boolean = false;
    id?:number;

    constructor(
        private formBuilder: FormBuilder,
        private carsService: CarsService,
        private route: ActivatedRoute,
    ) {

    }
    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        if(this.id){
            this.carsService.listById(this.id)
            .subscribe(
                dados => {
                    this.carsForm.patchValue(dados);
                }
            );
            this.edit = true;
        }
    }

    store() {
        this.message = "Enviando registro...";
        this.class = "secondary";
        const cars = this.carsForm.getRawValue() as Car;
        this.carsService.store(cars)
            .subscribe(response => {
                this.message = response;
                this.class = "success";
                this.errors = [];
                this.carsForm.reset();
            }, error => {
                this.errors = Object.values(error.error.errors) 
                this.message = '';
                this.class = '';
            });
    }

    update(){
        const cars = this.carsForm.getRawValue();
        this.carsService.update(this.id,cars).subscribe(
            res => { 
                this.message = res,
                this.class = "success";
            },
            error => {
                this.errors = Object.values(error.error.errors) 
            }
        );
    }
}