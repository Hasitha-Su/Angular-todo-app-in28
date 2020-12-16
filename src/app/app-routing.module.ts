import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  // defining an object
  { path:'', component:LoginComponent }, //canActivate, RouteGurdService
  { path:'login', component:LoginComponent },
  { path:'todos', component:ListTodosComponent},
  { path:'logout', component:LogoutComponent},
  // { path:'welcome', component: WelcomeComponent},
  // router with parameters
  { path:'welcome/:name', component: WelcomeComponent},

  //Anything else defined
  { path:'**', component: ErrorComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
