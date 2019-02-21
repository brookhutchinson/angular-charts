import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.css' ]
})
export class BarChartComponent implements OnInit {
  // properties
  barChartType = "bar";

  barChartData = [
    { data: [ 65, 69, 80, 81, 56, 55, 50 ], label: "Series A" },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: "Series B" }
  ]

  barChartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];

  barChartLegend = true;

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  constructor() {}

  ngOnInit() {}
}