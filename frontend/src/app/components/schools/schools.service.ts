import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { School } from 'src/app/interfaces/School';

const apiUrl = environment.apiUrl+'/schools/';
@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

  getSchools(page:number,search: string): Observable<School> {
    let params = new HttpParams()
    .set('search',search)
    .set('page',page);
    return this.httpClient.get<School>(apiUrl + 'get', { params });
  }

  getById(id: string) {
    return this.httpClient.get(apiUrl + 'getById/' + id);
  }

  create(School: School) {
    return this.httpClient.post(apiUrl + 'create/', School)
  }

  update(id: string, School: School) {
    return this.httpClient.put(apiUrl + 'update/' + id, School);
  }

  delete(id: string) {
    return this.httpClient.delete(apiUrl + 'delete/' + id);
  }
}
