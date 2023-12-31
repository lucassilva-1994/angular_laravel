import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../../services/schools.service';
import { School } from 'src/app/interfaces/School';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  schools: School[] = [];
  title: string = 'escolas';
  loading: boolean = false;
  message: string = "Carregando...";
  class:string = "alert-primary";
  search: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;
  constructor(private schoolService: SchoolsService) { }
  ngOnInit(): void {
    this.getSchools();
  }

  getSchools() {
    this.schoolService.getSchools(this.currentPage, this.search).subscribe(schools =>
      this.schools = schools, error => {
        this.class = 'alert-danger';
        this.message = error.statusText;
      });
  }

  schoolsFilter() {
    this.currentPage = 1;
    setTimeout(() => {
      this.schoolService.getSchools(this.currentPage, this.search).subscribe(schools => {
        this.schools = schools;
      });
    }, 4000);
  }

  loadMore() {
    this.schoolService.getSchools(++this.currentPage, this.search).subscribe(schools => {
      this.schools.push(...schools)
      if(!schools.length) this.hasMore = false;
    })
  }

  delete(id: string) {
    this.schoolService.delete(id).subscribe(() => this.getSchools());
  }
}
