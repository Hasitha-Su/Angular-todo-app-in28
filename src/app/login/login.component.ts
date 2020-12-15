import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // using interpollation we get the value
  username=''
  password=''

  errorMessage ='Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  // paramenter passed to the constructor is available as a member variable
  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }

  handleLogin(){
    
    console.log(this.username)
    console.log(this.password)

    // hard coed authentication
    // if(this.username === 'admin' && this.password === 'pass'){
    if(this.password === 'pass'){
      this.invalidLogin = false
      // Redirect to welcome page on success login
      // navigate accepts an array
      // this.router.navigate(['welcome'])
      // accepts routename and parameter
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin = true
    }
  }
}