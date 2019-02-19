// modules
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule }    from '@angular/platform-browser';
import { ChartsModule }     from 'ng2-charts';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent }     from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserModule, ChartsModule, FormsModule, HttpClientModule ],
  // components
  declarations: [ AppComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}