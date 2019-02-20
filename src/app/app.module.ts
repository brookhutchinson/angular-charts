// modules
import { NgModule }               from '@angular/core';
import { AppRoutingModule }       from './app-routing.module';
import { BrowserModule }          from '@angular/platform-browser';
import { ChartsModule }           from 'ng2-charts';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';

// components
import { AppComponent }           from './app.component';
import { BarChartComponent }      from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { PieChartComponent }      from './components/pie-chart/pie-chart.component';
import { RadarChartComponent }    from './components/radar-chart/radar-chart.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserModule, ChartsModule, FormsModule, HttpClientModule ],
  // components
  declarations: [ AppComponent, BarChartComponent, DoughnutChartComponent, NavbarComponent, PieChartComponent, RadarChartComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}