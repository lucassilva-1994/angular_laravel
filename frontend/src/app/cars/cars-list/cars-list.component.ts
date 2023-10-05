import { Component, OnInit } from "@angular/core";
import { Car } from "../car";
import { CarsService } from "../cars.service";

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit{
    cars: Car[] = [];
    constructor(private carsService: CarsService){}
    
    ngOnInit(): void {
        this.carsService.listAll().subscribe(
            cars => { this.cars = cars }
        );
    }
}