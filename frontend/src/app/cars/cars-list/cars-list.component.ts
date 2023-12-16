import { Component, OnInit } from "@angular/core";
import { Car } from "../car";
import { CarsService } from "../cars.service";
import { Router } from "@angular/router";
import { delay } from "rxjs";

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit{
    cars: Car[] = [];
    message: string = '';
    class: string = '';
    hasMore:boolean = true;
    currentPage = 1;
    displayMessage: boolean = false;

    showMessage(){
        this.displayMessage = true;
        setTimeout(() => {
            this.displayMessage= false;
        }, 5000);
    }
    constructor(
        private carsService: CarsService,
        private router: Router){}
    
    ngOnInit(): void {
            this.list();
    }

    list(){
        this.carsService.listAll(this.currentPage).subscribe(
            cars =>  this.cars = cars 
        );
    }

    loadMore(){
        this.carsService.listAll(++this.currentPage)
            .subscribe(cars => {
                this.cars = this.cars.concat(cars);
                if(!cars.length) this.hasMore = false;
            });
    }

    remove(id: number){
        this.carsService.remove(id)
        .subscribe(res => {
            this.showMessage();
            this.list();
            this.message = res.toString();
            this.class = 'success';
        })
    }

    edit(id: number){
        this.router.navigate(['edit', id]);
    }
}