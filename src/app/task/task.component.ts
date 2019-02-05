import { Component, OnInit } from '@angular/core';
import {Routes,Router,RouterModule} from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {TodoService} from '../service/todo.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TodoService]
})
export class TaskComponent implements OnInit {
taskForm:FormGroup
  constructor(private fb: FormBuilder, private todoService : TodoService) {
      this.taskForm = this.fb.group({
        name : new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        date : new FormControl('', Validators.required)
      })
   }

  ngOnInit() {

  }

  getAllTask(){


  }

  onSubmit(){
    console.log("form",JSON.stringify(this.taskForm.value))
    this.todoService.addTask(5,JSON.stringify(this.taskForm.value)).subscribe(res => {
      console.log("kayıt task")
      //this.router.navigate(['home/login']);
    })
  }

}
