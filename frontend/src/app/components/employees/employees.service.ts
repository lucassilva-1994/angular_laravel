import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/Employee';
import { School } from 'src/app/interfaces/School';
import { Job } from 'src/app/interfaces/Job';

const apiUrl = environment.apiUrl+'/employees/';
const url = environment.apiUrl;
@Injectable({
    providedIn:'root'
})
export class EmployeesService{
    constructor(private httpClient:HttpClient){}

    getJobs():Observable<Job>{
        return this.httpClient.get<Job>(url+'/jobs/get');
    }
    getSchools():Observable<School>{
        return this.httpClient.get<School>(url+'/schools/get');
    }

    getEmployees(page:number, search:string): Observable<Employee[]>{
        let params = new HttpParams()
        .set('search',search)
        .set('page',page)
        return this.httpClient.get<Employee[]>(apiUrl+'get',{params});
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