import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { School } from './../../../interfaces/School';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string = 'Cadastrar';
  form: FormGroup;
  edit: boolean = false;
  errors = [];
  message: string;
  class: string = 'alert-success';
  id: string;
  schools: School[];
  response: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private studentService: StudentsService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      cpf: [''],
      email: [''],
      phone: [''],
      birth_date: [''],
      school_id: [this.getSchools()]
    });
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.studentService.getById(this.id).subscribe(employee => {
        this.form.patchValue(employee)
        this.edit = true;
        this.title = 'Atualizar';
      });
    }
  }

  create() {
    this.studentService.create(this.form.getRawValue()).subscribe(response => {
      this.message = response.toString();
      this.response = true;
      this.form.reset();
      setTimeout(() => {
        this.response = false;
      }, 5000)
    }, error => {
      this.errors = Object.values(error.error.errors)
    })
  }

  update() {
    this.studentService.update(this.id, this.form.getRawValue()).subscribe(response => {
      this.message = response.toString();
      this.response = true;
      setTimeout(() => {
        this.response = false;
      }, 5000);
    }, error => {
      this.errors = Object.values(error.error.errors)
    })
  }

  getSchools() {
    this.studentService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }
}
