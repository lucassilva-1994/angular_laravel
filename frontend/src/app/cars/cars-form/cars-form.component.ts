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
        id:[''],
        brand: ['', Validators.required],
        color: ['', Validators.required],
        year: ['', Validators.required],
        model: ['', Validators.required]
    });

    errors = [];
    message: string = '';
    class: string = '';
    edit:boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private carsService: CarsService,
        private route: ActivatedRoute
    ) {

    }
    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        if(id){
            const car = this.carsService.listById(id)
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

    update(){
        const id = this.carsForm.get('id')?.value;
        const cars = this.carsForm.getRawValue() as Car;
        this.carsService.update(id,cars).subscribe(
            () => { 
                this.message = "Carro atualizado com sucesso.",
                this.class = "success";
            }
        );
    }
}