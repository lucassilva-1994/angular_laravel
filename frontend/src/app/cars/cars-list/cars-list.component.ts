import { Component, OnInit } from "@angular/core";
import { Car } from "../car";
import { CarsService } from "../cars.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit{
    cars: any[] = [];
    message: string = '';
    class: string = '';
    constructor(
        private carsService: CarsService,
        private router: Router){}
    
    ngOnInit(): void {
        this.list();
    }

    list(){
        this.carsService.listAll().subscribe(
            cars =>  this.cars = cars 
        );
    }

    remove(id: number){
        this.carsService.remove(id)
        .subscribe(res => {
            this.list();
            this.message = 'Carro removido com sucesso.';
            this.class = 'success';
        })
    }

    edit(id: number){
        this.router.navigate(['edit', id]);
    }
}