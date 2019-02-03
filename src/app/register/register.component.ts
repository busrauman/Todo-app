import { Component, OnInit } from '@angular/core';
import {Routes,Router,RouterModule} from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {PasswordValidator } from '../validators/password.validator';
import {AuthenticationService}  from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
constructor(
      private fb :FormBuilder,
      private router: Router,
       private authService : AuthenticationService
      ) {
      this.registerForm = this.fb.group({
        password: new FormControl('', Validators.required),
        email : new FormControl('', Validators.compose([
        		Validators.required,
        		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  	   ])),
       confirmedPassword: new FormControl('', Validators.required),
       name: new FormControl('', Validators.required)
     },{validator : PasswordValidator})
        console.log("cont register")
    }


  ngOnInit() {

  }
 onSubmit(){
   console.log("form",JSON.stringify(this.registerForm.value))
   this.authService.register(JSON.stringify(this.registerForm.value)).subscribe(res => {
     console.log("logine yönleniyor")
     this.router.navigate(['home/login']);
   })
 }

}
