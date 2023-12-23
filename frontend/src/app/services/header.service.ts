import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./localStorage.service";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private headers: HttpHeaders = new HttpHeaders();
    private token = this.localStorageService.getItem('token');
    constructor(private localStorageService:LocalStorageService) {
        this.headers = this.headers
        .append('Authorization', `${this.token}`)
    }

    getHeaders():HttpHeaders{
        return this.headers;
    }
}