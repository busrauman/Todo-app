import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {path : 'home/register', component:RegisterComponent},
  {path: 'home/login',component: LoginComponent},
  {path : 'todos', component:TodoComponent},
  {path : 'home', component:HomeComponent },
  {path: '', pathMatch: 'prefix',redirectTo: 'home'},
  {path : 'detail', component:TodoDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
   RouterModule
  ],
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,TodoComponent,HomeComponent,TodoDetailComponent]
