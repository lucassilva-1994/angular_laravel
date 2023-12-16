import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolsService } from './../schools.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
      form:FormGroup = this.formBuilder.group({
        name:['',Validators.required],
        cnpj:['',Validators.required],
        address: ['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required]
      });
      id:string='';
      edit:boolean=false;
      title:string = 'Cadastrar';
      constructor(private formBuilder:FormBuilder, 
        private schoolService:SchoolsService,
        private route: ActivatedRoute){}

      ngOnInit(): void { 
        this.id = this.route.snapshot.params['id'];
        if(this.id){
          this.schoolService.getById(this.id).subscribe(school => {
            this.form.patchValue(school);
            this.edit=true;
            this.title="Editar";
          })
        }
      }

      create(){
        this.schoolService.create(this.form.getRawValue()).subscribe(response=>{
          console.log(response)
        },error=>{
          console.log(error);
        });
      }

      update(){
        this.schoolService.update(this.id,this.form.getRawValue()).subscribe(
          school =>{
            console.log(school)
          }
        );
      }
}
