import { Injectable } from '@angular/core';
import {ApiConstant} from '../api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin' : '*'})
};
@Injectable()
export class AuthenticationService {

  baseUrl = ApiConstant.userApi;
  loginURI = this.baseUrl + "/login"

  constructor(private http:HttpClient) {

   }
  register(user){
    console.log("register Service ", user);
    return this.http.post(this.baseUrl, user,{headers:httpOptions.headers});
  }

  getUserById(id){
    return this.http.get(this.baseUrl +"/" +id,{headers:httpOptions.headers});
  }

  login(user){
      return this.http.post(this.loginURI,user,{headers:httpOptions.headers});
  }
  checkLogin(){
    return JSON.parse(localStorage.getItem("user"))
     && JSON.parse(localStorage.getItem("userId"))
     && JSON.parse(localStorage.getItem("loggined"));
  }

}
