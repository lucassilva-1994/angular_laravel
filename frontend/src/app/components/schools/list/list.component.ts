import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { School } from 'src/app/interfaces/School';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  schools: School[] = [];
  title: string = 'escolas';
  loading: boolean = true;
  message: string = "Carregando...";
  search: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;
  constructor(private schoolService: SchoolsService) { }
  ngOnInit(): void {
    this.getSchools();
  }

  getSchools() {
    this.schoolService.getSchools(this.currentPage, this.search).subscribe(schools =>
      this.schools = Object.values(schools), error => {
        console.log(error);
      }, () => {
        this.loading = false;
      });
  }

  schoolsFilter() {
    setTimeout(() => {
      this.schoolService.getSchools(this.currentPage, this.search).subscribe(schools => {
        this.schools = Object.values(schools);
      });
    }, 400);
  }

  loadMore() {
    this.schoolService.getSchools(++this.currentPage, this.search).subscribe(schools => {
      this.schools.push(...Object.values(schools))
      if(!Object.values(schools).length) this.hasMore = false;
    })
  }

  delete(id: string) {
    this.schoolService.delete(id).subscribe(() => this.getSchools());
  }
}
