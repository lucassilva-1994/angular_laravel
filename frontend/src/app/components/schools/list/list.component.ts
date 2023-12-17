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
  search:string='';
  constructor(private schoolService: SchoolsService) { }
  ngOnInit(): void {
    this.getSchools();
  }

  getSchools() {
    this.schoolService.getSchools(this.search).subscribe(schools =>
      this.schools = Object.values(schools), error => {
        console.log(error);
      }, () => {
        this.loading = false;
      });
  }

  schoolsFilter(){
    setTimeout(() => {
      this.schoolService.getSchools(this.search).subscribe(schools => {
        this.schools = Object.values(schools)
      });
    }, 400);
  }

  delete(id: string) {
    this.schoolService.delete(id).subscribe(() => this.getSchools());
  }
}
