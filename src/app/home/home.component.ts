import { Component, OnInit } from '@angular/core';
import {Routes,Router,RouterModule} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authService:AuthenticationService) { }

  ngOnInit() {

    if(this.authService.checkLogin() == true){
      if(!this.authService.checkLogin()){
        console.log("checkLogin in home");
        this.router.navigate(['home'])
      }else{
        this.router.navigate(['todos'])

      }
    }
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
