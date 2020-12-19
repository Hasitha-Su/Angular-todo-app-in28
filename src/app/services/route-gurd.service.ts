import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGurdService implements CanActivate {

  constructor(private hardcodedAuthService: HardcodedAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthService.isUserLoggedIn())
      return true
    return false
  }
}
