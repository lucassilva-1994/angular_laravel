import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from 'src/app/interfaces/School';
import { Student } from './../../interfaces/Student';

const apiUrl = environment.apiUrl+'/students/';
const url = environment.apiUrl;
@Injectable({
    providedIn:'root'
})
export class StudentsService{
    constructor(private httpClient:HttpClient){}

    getSchools():Observable<School>{
        return this.httpClient.get<School>(url+'/schools/get');
    }

    getStudents(page:number, search:string): Observable<Student>{
        let params = new HttpParams()
        .set('search',search)
        .set('page',page)
        return this.httpClient.get<Student>(apiUrl+'get',{params});
    }

    getById(id:string):Observable<Student>{
        return this.httpClient.get<Student>(apiUrl+'getById/'+id);
    }

    create(Student:Student){
        return this.httpClient.post(apiUrl+'create',Student);
    }

    update(id:string,Student:Student){
        return this.httpClient.put(apiUrl+'update/'+id,Student);
    }

    delete(id:string){
        return this.httpClient.delete(apiUrl+'delete/'+id);
    }
}