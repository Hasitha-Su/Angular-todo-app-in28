import { Component } from '@angular/core';

@Component({
  
  selector: 'app-root', // component name , tag name

  // html file location or template of the component
  // template: '<h2>Yoo Im coming from right outta template</h2>',
  templateUrl: './app.component.html',

  //styling file location of the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo';
  testMessage = 'test message' // interpollation
}
