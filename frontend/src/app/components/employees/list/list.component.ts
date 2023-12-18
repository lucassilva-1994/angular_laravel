import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];
  title: string = 'funcionários';
  search: string = '';
  loading: boolean = false;
  hasMore: boolean = false;
  message: string = '';
  class: string;
  response: boolean = false;
  constructor(private employeeService: EmployeesService) { }
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = Object.values(employees)
    });
  }

  employeesFilter() {

  }

  loadMore() {

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
