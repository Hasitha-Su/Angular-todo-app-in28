import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn: boolean = false

  //this is private but since error occured it had to be changed to public
  constructor(public hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit(): void {
    // this.isUserLoggedIn = this.hardcodedAuthService.isUserLoggedIn();
  }
}
