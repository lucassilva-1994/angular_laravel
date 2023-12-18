import { NgModule } from "@angular/core";
import { LoadmorebuttonComponent } from "./loadmorebutton/loadmorebutton.component";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message/message.component";

@NgModule({
    declarations:[
        LoadmorebuttonComponent,
        MessageComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        LoadmorebuttonComponent,
        MessageComponent
    ]
})
export class SharedModule{

}