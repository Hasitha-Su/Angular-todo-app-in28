import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  // defining an object
  { path:'', component: LoginComponent },
  { path:'login', component: LoginComponent },
  { path:'welcome', component: WelcomeComponent},

  //Anything else defined
  { path:'**', component: ErrorComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
