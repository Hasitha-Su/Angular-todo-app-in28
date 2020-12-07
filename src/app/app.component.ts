import { Component } from '@angular/core';

@Component({
  //component name , tag name
  selector: 'app-root',

  //html file location of the component
  templateUrl: './app.component.html',

  //styling file location of the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo';
  testMessage = 'test message' //interpollation


}
