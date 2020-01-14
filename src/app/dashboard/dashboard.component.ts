import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  radius = 15;
  colorr = 'green';
  color = 'warn';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit() {
  
  }

}
