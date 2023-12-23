import { Component } from "@angular/core";
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    username:string|null = this.localStorageService.getItem('username');

    constructor(private localStorageService:LocalStorageService){}
}