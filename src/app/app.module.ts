import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodoComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
