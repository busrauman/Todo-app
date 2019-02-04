import { Component, OnInit } from '@angular/core';
import {Routes,Router,RouterModule,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  id;
  constructor(private router:ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.id = params['id']
    });

    console.log("detail ", this.id)
  }

  ngOnInit() {
  }

}
