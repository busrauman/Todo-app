import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Routes,Router,RouterModule} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup
  constructor(
    private fb :FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email : new FormControl('', Validators.compose([
      		Validators.required,
      		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
	   ]))
    })
      console.log("cont login")
  }

  ngOnInit() {

    console.log("init login")

  }
  goRegister() {
    console.log("go register")
    this.router.navigate(['register']);
  }

  onSubmit(){
    console.log("form",this.loginForm.value)
  }

}
