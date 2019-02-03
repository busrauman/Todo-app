import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }


  getAllTodoByUserId(id){
    console.log("gel all todos " ,id );
  }

}
