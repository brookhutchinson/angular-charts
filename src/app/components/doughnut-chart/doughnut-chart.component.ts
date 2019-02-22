import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: [ './doughnut-chart.component.css' ]
})
export class DoughnutChartComponent implements OnInit {
  // properties
  doughnutChartType = 'doughnut';

  doughnutChartData = [ 120, 150, 180, 90 ];

  doughnutChartLabels = [ 'Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4' ];

  constructor() {}

  ngOnInit() {}
}