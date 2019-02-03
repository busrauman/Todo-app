import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';     // Add this
import { RegisterComponent } from './register/register.component';  // Add this
const routes: Routes = [
  {path: 'login',component: LoginComponent  },
  {path : 'register', component:RegisterComponent}
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
export const routingComponents = [LoginComponent,RegisterComponent]
