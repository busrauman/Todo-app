import { Component } from '@angular/core';
import {ApiConstant} from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'TO-DO';
  constructor() {
    ;
    console.log("constructor app",ApiConstant.userApi);

}

  ngOnInit(){
    console.log("init app")
  }
}
