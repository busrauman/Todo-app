import { Component, OnInit } from '@angular/core';
import {Routes,Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
username;
  constructor(private router : Router) {
     this.username=localStorage.getItem("username")
    var re = /\"/gi;
    this.username = this.username.replace(re,"")
  }

  ngOnInit() {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

logOut(){
  localStorage.clear();
  this.router.navigate(['home'])
}

}
