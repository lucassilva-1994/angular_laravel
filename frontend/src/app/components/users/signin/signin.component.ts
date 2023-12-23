import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  message:string;
  class:string;
  form: FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private usersService:UsersService,
    private route: Router){}
  ngOnInit(): void {
      this.form = this.formBuilder.group({
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required]]
      });
  }

  auth(){
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this.usersService.auth(email,password).subscribe(()=>{
      this.route.navigate(['/schools']);
    });
  }
}
