import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {

todos: Array<Todo> = [];
  constructor(private todoService : TodoService) {
    console.log("todos")
   }

  ngOnInit() {
    this.todoService.getAllTodoByUserId(5)
  }

  getAllTodos(){
    console.log("get all todoas")
  }

  addTodo(title){
    let id = this.todos.length + 1;
    let todo = new Todo(id,title.value,'activate')
    this.todos.push(todo)
    console.log(this.todos)
    title = null
  }

}
