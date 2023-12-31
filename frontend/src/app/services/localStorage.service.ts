import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class LocalStorageService{
    getItem(item:string){
        return localStorage.getItem(item);
    }

    setItem(res:Object){
        const response = JSON.parse(JSON.stringify(res));
        localStorage.setItem('token',response.token);
        localStorage.setItem('user_id',response.user_id);
        localStorage.setItem('name',response.name);
        localStorage.setItem('email',response.email);
        localStorage.setItem('username',response.username);
    }

    removeItens(){
        localStorage.clear();
    }
}