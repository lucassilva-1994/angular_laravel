import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { User } from "src/app/interfaces/User";
import { environment } from "src/environments/environment";

const apiUrl = environment.apiUrl;
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private httpClient: HttpClient) { }

    auth(user: User) {
        return this.httpClient.post(apiUrl + '/signin', user)
            .pipe(tap(res => {
                const response = JSON.parse(JSON.stringify(res));
                console.log(response);
                localStorage.setItem('token',response.token);
                localStorage.setItem('username',response.user.username);
            }));
    }
}