import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadmorebutton',
  templateUrl: './loadmorebutton.component.html',
  styleUrls: ['./loadmorebutton.component.css']
})
export class LoadmorebuttonComponent implements OnInit{
  @Input() hasMore:boolean = false;

  ngOnInit(): void {
    
  }
}
