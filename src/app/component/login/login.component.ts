import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

      constructor(fb: FormBuilder) {
          this.formGroup = fb.group({
              title: fb.control('initial value', Validators.required)
          });
      }

      ngOnInit(): void {
          this.formGroup.reset({title: 'new value'});
      }

  onSubmit(){
    console.log("login ", this.formGroup.value);
  }
}
