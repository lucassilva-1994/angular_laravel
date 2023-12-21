import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

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
        email:[''],
        password:['']
      });
  }

  auth(){
    this.usersService.auth(this.form.getRawValue()).subscribe(()=>{
      this.route.navigate(['/schools']);
    });
  }
}
