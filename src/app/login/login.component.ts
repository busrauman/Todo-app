import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Routes,Router,RouterModule} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup
error
  constructor(
    private fb :FormBuilder,
    private router: Router,
    private authService : AuthenticationService) {
    this.loginForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email : new FormControl('', Validators.compose([
      		Validators.required,
      		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
	   ]))
    })
      console.log("cont login")
      if(this.authService.checkLogin() == true){
        if(!this.authService.checkLogin()){
          console.log("checkLogin in home");
          this.router.navigate(['home'])
        }
      }
  }

  ngOnInit() {//$2a$10$uOrnjXvFqVjcYSl4e6BtAOl3YZLTFCCP.hcV6kTme7NtFvyD92DdO
    //$2a$10$PNz0a.HN4h66EZ7n/2Gkse7qp4dzeWZC1otPerH1nLUqVe.bpkIsy

    console.log("init login")
  }
  onSubmit(){
    console.log("form", this.loginForm.value)
    this.authService.login(JSON.stringify(this.loginForm.value)).subscribe(res =>{
      if(res.id){
        //loggined
        localStorage.setItem("user" , JSON.stringify(res));
        localStorage.setItem("userId" , JSON.stringify(res["id"]));
        localStorage.setItem("loggined" , 'true')
        this.router.navigate(['todos']);

      console.log(  " heree",JSON.parse(localStorage.getItem("user")))
      console.log(JSON.parse(localStorage.getItem("userId")))
      console.log(JSON.parse(localStorage.getItem("loggined")))

      }else{

        this.error="Bad Credentials"
      }

    });

  }

}
