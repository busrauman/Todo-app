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
  taskApi = ApiConstant.taskApi;

  constructor(private http:HttpClient) {
  }

  getAllTodoByUserId(id){
    console.log("gel all todos " ,id );
    return this.http.get(this.createTodoURI +"/"+ localStorage.getItem("userId") +"/todos",{headers:httpOptions.headers});
  }

  delete(id){
    return this.http.delete(this.createTodoURI +"/todos/" +id,{headers:httpOptions.headers});
  }

  createTodo(todo:Todo){
    //1 --> user ıd owner
    return this.http.post(this.createTodoURI +"/" + localStorage.getItem("userId"), todo,{headers:httpOptions.headers});
  }

// task ID
  getTodo(id){

  }

//todo id
  getTaskOfTodo(id){

  }
  addTask(id,task){
    console.log(task)
    return this.http.post(this.taskApi +"/todo/"+id, task, {headers:httpOptions.headers});
  }

}
