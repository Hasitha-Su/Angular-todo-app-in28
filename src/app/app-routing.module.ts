import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGurdService } from './services/route-gurd.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  // defining an object
  { path: '', component: LoginComponent }, //canActivate, RouteGurdService
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGurdService] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGurdService] },
  // { path:'welcome', component: WelcomeComponent},
  // router with parameters
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGurdService] },//put inside array

  //Anything else defined
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
