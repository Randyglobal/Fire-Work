import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Define all the routes of your application
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 1) RouterModule class
// 2) router-outlet directive (selector) -.html
// user/login/profile
// localhost:4200