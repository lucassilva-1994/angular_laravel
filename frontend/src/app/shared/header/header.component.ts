import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from './../../core/localStorage.service';
import { BehaviorSubject } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    username$ = new BehaviorSubject<any>(null);
    constructor(private localStorageService:LocalStorageService){
    }
    ngOnInit(): void {
        this.username$.next(this.localStorageService.getItem('username'));
        this.username$.asObservable();
    }
}