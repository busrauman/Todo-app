import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup
  constructor(private fb :FormBuilder) {
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

  onSubmit(){

    console.log("form",this.loginForm.value)
  }

}
