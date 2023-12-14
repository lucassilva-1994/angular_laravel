import { Component, OnInit } from "@angular/core";
import { Car } from "../car";
import { CarsService } from "../cars.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit{
    cars: Car[] = [];
    message: any;
    class: string = '';
    hasMore:boolean = true;
    currentPage = 1;
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
                this.cars.push(...cars);
                if(!cars.length) this.hasMore = false;
            });
    }

    remove(id: number){
        this.carsService.remove(id)
        .subscribe(res => {
            this.list();
            this.message = res;
            this.class = 'success';
        })
    }

    edit(id: number){
        this.router.navigate(['edit', id]);
    }
}