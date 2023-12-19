import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';
import { StudentsService } from './../students.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  students: Student[];
  title: string = 'estudantes';
  search: string = '';
  loading: boolean = false;
  message: string = '';
  class: string;
  response: boolean;
  currentPage:number= 1;
  hasMore:boolean = true;
  constructor(private studentsService: StudentsService) { }
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getStudents(this.currentPage, this.search).subscribe(students => {
      this.students = Object.values(students)
    });
  }

  studentsFilter() {
    this.studentsService.getStudents(this.currentPage, this.search).subscribe(students => {
      this.students = Object.values(students)
    });
  }

  loadMore() {
    this.studentsService.getStudents(++this.currentPage, this.search).subscribe(students => {
      this.students.push(...Object.values(students))
      if(!Object.values(students).length) this.hasMore = false;
    })
  }

  delete(id: string) {
    this.studentsService.delete(id).subscribe(response => {
      this.message = response.toString();
      this.class = 'alert-success';
      this.response = true;
      setTimeout(() => {
        this.response = false;
      }, 2000);
      this.getStudents();
    });
  }
}
