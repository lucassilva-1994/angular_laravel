import { Component, OnInit } from "@angular/core";
import { Car } from "../car";
import { CarsService } from "../cars.service";

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit{
    cars: Car[] = [];
    message: string = '';
    constructor(private carsService: CarsService){}
    
    ngOnInit(): void {
        this.carsService.listAll().subscribe(
            cars => { this.cars = cars }
        );
    }

    remove(id: number){
        this.carsService.remove(id).subscribe(() => 
        this.message = "Carro removido com sucesso.");
    }
}