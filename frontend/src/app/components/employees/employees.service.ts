import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/Employee';
import { School } from 'src/app/interfaces/School';

const apiUrl = environment.apiUrl+'/employees/';
const url = environment.apiUrl;
@Injectable({
    providedIn:'root'
})
export class EmployeesService{
    constructor(private httpClient:HttpClient){}

    getSchools():Observable<School>{
        return this.httpClient.get<School>(url+'/schools/get');
    }

    getEmployees(): Observable<Employee>{
        return this.httpClient.get<Employee>(apiUrl+'get');
    }

    getById(id:string):Observable<Employee>{
        return this.httpClient.get<Employee>(apiUrl+'getById/'+id);
    }

    create(Employee:Employee){
        return this.httpClient.post(apiUrl+'create',Employee);
    }

    update(id:string,Employee:Employee){
        return this.httpClient.put(apiUrl+'update/'+id,Employee);
    }

    delete(id:string){
        return this.httpClient.delete(apiUrl+'delete/'+id);
    }
}