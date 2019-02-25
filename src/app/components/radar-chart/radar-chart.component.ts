import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: [ './radar-chart.component.css' ]
})
export class RadarChartComponent implements OnInit {
  // properties
  radarChartType = 'radar';

  radarChartData = [
    { data: [ 120, 130, 180, 70 ], label: '2017' },
    { data: [ 90, 150, 200, 451 ], label: '2018' }
  ];

  radarChartLabels = [ 'Q1',  'Q2', 'Q3', 'Q4' ];

  constructor() {}

  ngOnInit() {}
}