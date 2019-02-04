import { Injectable } from '@angular/core';
import {ApiConstant} from '../api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from '../todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin' : '*'})
};

@Injectable()
export class TodoService {

  createTodoURI = ApiConstant.todoApi;


  constructor(private http:HttpClient) {
  }

  getAllTodoByUserId(id){
    console.log("gel all todos " ,id );
    return this.http.get(this.createTodoURI +"/1/todos",{headers:httpOptions.headers});
  }

  delete(id){
    return this.http.delete(this.createTodoURI +"/todos/" +id,{headers:httpOptions.headers});
  }

  createTodo(todo:Todo){
    //1 --> user ıd owner
    return this.http.post(this.createTodoURI +"/1", todo,{headers:httpOptions.headers});
  }

  getTodo(id){
    

  }

}
