import { Injectable } from '@angular/core';
import {ApiConstant} from '../api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin' : '*'})
};
@Injectable()
export class AuthenticationService {

  baseUrl = ApiConstant.userApi;

  constructor(private http:HttpClient) {

   }
  register(user){
    console.log("register Service ", user);
    return this.http.post(this.baseUrl, user,{headers:httpOptions.headers});
  }

  getUserById(id){
    return this.http.get(this.baseUrl +"/" +id,{headers:httpOptions.headers});
  }

}
