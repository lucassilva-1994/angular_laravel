import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { User } from "src/app/interfaces/User";
import { environment } from "src/environments/environment";
import { LocalStorageService } from './localStorage.service';

const apiUrl = environment.apiUrl;
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(
        private httpClient: HttpClient,
        private localStorageService: LocalStorageService) { }

    auth(email:string, password:string) {
        return this.httpClient.post(apiUrl + '/signin', {email,password})
            .pipe(tap(res => {
                this.localStorageService.setItem(res);
            }));
    }
}