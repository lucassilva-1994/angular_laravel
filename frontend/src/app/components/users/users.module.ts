import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[SigninComponent,SignupComponent],
    imports:[
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class UserModule{}