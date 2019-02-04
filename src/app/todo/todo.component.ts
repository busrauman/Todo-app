import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {AuthenticationService} from '../service/authentication.service';
import {Routes,Router,RouterModule} from '@angular/router';

import {Todo} from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService,AuthenticationService]
})
export class TodoComponent implements OnInit {

todos: any = [];
message;

dateTo=new Date();
options = {
    format: "DD.MM.YYYY",
    maxDate: this.dateTo
};
  constructor(private todoService : TodoService,
    private authService : AuthenticationService,
    private router: Router) {
    console.log("todos")
   }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos(){
    this.todoService.getAllTodoByUserId(1).subscribe(res => {
    //  console.log(JSON.stringify(res));
      this.todos = res;
    })  }

  deleteTodo(id){
    console.log(id);
    this.todoService.delete(id).subscribe(res => {
      console.log(JSON.stringify(res));
      this.getAllTodos()
    })
  }

  addTodo(title){
    if(title != null && title != ""){
      let todo = new Todo(title)
      // this.authService.getUserById(1).subscribe(user => {
      //     if(user){
      //       console.log(user);
      //     }
      // })
      this.todoService.createTodo(todo).subscribe(res =>{
          this.message = "başarılı"
          console.log(JSON.stringify(res));
          this.getAllTodos()

      });
    }
  }

  getTodo(id){
    // this.todoService.getTodo(id).subscribe(res =>{
    //     if(res){
    //     }
    //
    // });
    console.log("id" ,id);
    this.router.navigate(['detail'], { queryParams: { id : id } })

  }

}
