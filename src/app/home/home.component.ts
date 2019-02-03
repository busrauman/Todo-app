import { Component, OnInit } from '@angular/core';
import {Routes,Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogin(){
    console.log("goLogin in home")
    this.router.navigate(['home/login']);
  }
  goRegister(){
    console.log("goRegister in home")
    this.router.navigate(['home/register']);
  }
}
