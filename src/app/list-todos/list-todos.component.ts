import { Component, OnInit } from '@angular/core';

// new class created
export class Todo {
  constructor(
    public id: number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }

  todos = [
      // { id : 1, description : 'Learn to Dance'},
      // { id : 2, description : 'Visit India'},
      // { id : 3, description : 'Learn to Hack'},
      // { id : 4, description : 'Become an Angular expert'}

      //using the class
      new Todo(1, 'Learn to Dance', false, new Date()),
      new Todo(2, 'Visit India', false, new Date()),
      new Todo(3, 'Learn to Hack', false, new Date()),
      new Todo(4, 'Become an Angular expert', false, new Date()),
      new Todo(5, 'Keal', false, new Date()),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
