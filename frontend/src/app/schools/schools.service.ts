import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { School } from '../interfaces/School';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

  getSchools(search: string): Observable<School> {
    let params = new HttpParams().set('?search',search);
    return this.httpClient.get<School>(apiUrl + '/schools/get', { params });
  }

  getById(id: string) {
    return this.httpClient.get(apiUrl + '/schools/getById/' + id);
  }

  create(School: School) {
    return this.httpClient.post(apiUrl + '/schools/create/', School)
  }

  update(id: string, School: School) {
    return this.httpClient.put(apiUrl + '/schools/update/' + id, School);
  }

  delete(id: string) {
    return this.httpClient.delete(apiUrl + '/schools/delete/' + id);
  }
}
