import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "./car";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const API = environment.apiUrl;

@Injectable({providedIn:'root'})
export class CarsService{
    constructor(private httpClient: HttpClient){}

    store(car: Car){
        return this.httpClient.post(API+'/store',car);
    }

    listAll(page:number){
        const params = new HttpParams()
        .append('page',page.toString());
        return this.httpClient.get<Car[]>(API + '/all',{params});
    }

    listById(id: number){
        return this.httpClient.get<Car[]>(API + '/listById/'+id);
    }

    remove(id: number){
        return this.httpClient.delete(API + '/delete/'+id);
    }

    update(id:any, car:Car){
        return this.httpClient.put(API+'/update/'+id,car);
    }
}