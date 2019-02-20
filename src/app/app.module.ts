// modules
import { NgModule }          from '@angular/core';
import { AppRoutingModule }  from './app-routing.module';
import { BrowserModule }     from '@angular/platform-browser';
import { ChartsModule }      from 'ng2-charts';
import { FormsModule }       from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';

// components
import { AppComponent }      from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserModule, ChartsModule, FormsModule, HttpClientModule ],
  // components
  declarations: [ AppComponent, BarChartComponent, NavbarComponent, PieChartComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}