import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  schools: any = [];
  title:string = 'escolas';
  constructor(private schoolService: SchoolsService) { }
  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(){
    this.schoolService.getSchools().subscribe(schools =>
      this.schools = Object.values(schools));
  }

  delete(id: string){
      this.schoolService.delete(id).subscribe(() => this.getSchools());
  }
}
