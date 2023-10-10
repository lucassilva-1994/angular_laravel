import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "./car";
import { environment } from "src/environments/environment";

const API = environment.apiUrl;

@Injectable({providedIn:'root'})
export class CarsService{
    constructor(private httpClient: HttpClient){}

    store(car: Car){
        return this.httpClient.post(API+'/store',car);
    }

    listAll(){
        return this.httpClient.get<Car[]>(API + '/all');
    }

    remove(id: number){
        return this.httpClient.delete(API + '/delete/'+id);
    }
}