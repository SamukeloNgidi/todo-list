import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todos!:Todo[]; //array of todo items
  inputTodo:string = "";

  constructor(){}

  ngOnInit(): void { 
    this.todos = [ //populate the array
      {
        item: 'Learn Angular',
        done: false
      },
      {
        item: 'Learn Java',
        done: true
      },
      {
        item: 'Learn JavaScript',
        done: false
      },
      {
        item: 'Learn SQL',
        done: true
      },
      {
        item: 'Learn Python',
        done: false
      }
    ]
  }

  toggleDone(id: number): void{
    //loop throught the list and find matching id, then set it to done.
    this.todos.map((v, i) => {
      if (i == id) v.done = !v.done;
      return v;
    })
  }

  removeItem(id: number): void{
    //return anything that is not equal to id
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addItem(): void {
    //push a new object into the array
    this.todos.push({
      item: this.inputTodo,
      done: false
    });

    //clear input after adding item
    this.inputTodo = "";
  }
}
