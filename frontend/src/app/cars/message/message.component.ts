import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit{
    @Input() message = '';
    @Input() class = '';
    displayMessage:boolean = true;

    ngOnInit(): void {
        setTimeout(()=>{
            this.displayMessage = false
        },5000)
    }
}