import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [ './pie-chart.component.css' ]
})
export class PieChartComponent implements OnInit {
  // properties
  pieChartType = 'pie';

  pieChartData = [ 120, 150, 180, 90 ];

  pieChartLabels = [ 'Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4' ];

  constructor() {}

  ngOnInit() {}
}