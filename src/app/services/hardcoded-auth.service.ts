import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  //implement method to user authenticate
  authenticate(username, password) {

    if (password === 'pass') {
      //console.log('before '+ this.isUserLoggedIn() )
      sessionStorage.setItem('authenticatedUser', username)
      //console.log('after '+ this.isUserLoggedIn() )
      return true
    } else {
      return false
    }

  }

  //check if user logged in
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }


}
