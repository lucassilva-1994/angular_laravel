import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { School } from './../../../interfaces/School';
import { Job } from 'src/app/interfaces/Job';

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
  jobs: Job[];
  response: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private employeeService: EmployeesService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      cpf: [''],
      email: [''],
      phone: [''],
      birth_date: [''],
      school_id: [this.getSchools()],
      job_id:[this.getJobs()]
    });
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.employeeService.getById(this.id).subscribe(employee => {
        this.form.patchValue(employee)
        this.edit = true;
        this.title = 'Atualizar';
      });
    }
  }

  create() {
    this.employeeService.create(this.form.getRawValue()).subscribe(response => {
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
    this.employeeService.update(this.id, this.form.getRawValue()).subscribe(response => {
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
    this.employeeService.getSchools().subscribe(schools => {
      this.schools = Object.values(schools);
    });
  }

  getJobs(){
    this.employeeService.getJobs().subscribe(jobs => {
      this.jobs = Object.values(jobs);
    })
  }
}
