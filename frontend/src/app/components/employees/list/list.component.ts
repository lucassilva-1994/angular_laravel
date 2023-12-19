import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employees: Employee[];
  title: string = 'funcionários';
  search: string = '';
  loading: boolean = false;
  message: string = '';
  class: string;
  response: boolean;
  currentPage:number= 1;
  hasMore:boolean = true;
  constructor(private employeeService: EmployeesService) { }
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees(this.currentPage, this.search).subscribe(employees => {
      this.employees = employees
    });
  }

  employeesFilter() {
    this.currentPage = 1;
    this.employeeService.getEmployees(this.currentPage, this.search).subscribe(employees => {
      this.employees = employees
    });
  }

  loadMore() {
    this.employeeService.getEmployees(++this.currentPage, this.search).subscribe(employees => {
      this.employees.push(...employees)
      if(!employees.length) this.hasMore = false;
    })
  }

  delete(id: string) {
    this.employeeService.delete(id).subscribe(response => {
      this.message = response.toString();
      this.class = 'alert-success';
      this.response = true;
      setTimeout(() => {
        this.response = false;
      }, 2000);
      this.getEmployees();
    });
  }
}
