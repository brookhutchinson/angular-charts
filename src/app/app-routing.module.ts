// modules
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

// components
import { BarChartComponent }      from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent }      from './components/pie-chart/pie-chart.component';
import { RadarChartComponent }    from './components/radar-chart/radar-chart.component';

// define routes
const routes: Routes = [
  // bar chart route
  { path: 'bar-chart', component: BarChartComponent },
  // doughnut chart route
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  // pie chart route
  { path: 'pie-chart', component: PieChartComponent },
  // radar chart route
  { path: 'radar-chart', component: RadarChartComponent },
  // default route
  { path: '**', component: BarChartComponent }
];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}