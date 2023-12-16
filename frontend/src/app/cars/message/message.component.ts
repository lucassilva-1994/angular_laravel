import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent{
    @Input() message = '';
    @Input() class = '';
}