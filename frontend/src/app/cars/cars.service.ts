import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://127.0.0.1:8080/api';

@Injectable({providedIn:'root'})
export class CarsService{
    constructor(private httpClient: HttpClient){}

    store(brand: string, model: string, color: string, year: number){
        return this.httpClient.post(API+'/store',{
            brand, model, color, year
        });
    }
}