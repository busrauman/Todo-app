import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import {Routes,Router,RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthenticationService}  from './service/authentication.service';
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './task/task.component';
import {A2Edatetimepicker} from 'ng2-eonasdan-datetimepicker';
import { FormsModule } from '@angular/forms';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
@NgModule({

  declarations: [
    AppComponent,
   routingComponents,
    NavBarComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    A2Edatetimepicker,
    FormsModule
  ],
  exports: [
   RouterModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
