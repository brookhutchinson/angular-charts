// modules
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// define routes
const routes: Routes = [];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}