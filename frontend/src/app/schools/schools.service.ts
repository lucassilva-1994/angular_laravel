import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { School } from '../interfaces/School';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

  getSchools() {
    return this.httpClient.get(apiUrl + '/schools/get');
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
