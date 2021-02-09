import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './signup/user.model';

@Injectable({
  providedIn: 'root'
  
})
export class AuthService {
  readonly baseurl='http://localhost:3000/users';
  selectedProduct:UserModel;
loginUser(user:any){
 return this.http.post<any>("http://localhost:3000/login",user)
}

 addUser(item: UserModel){
  return this.http.post(this.baseurl+'/insert',{"users":item})
  .subscribe(data=>{console.log(data)})
}

getUsers(){
  return this.http.get("http://localhost:3000/users");
}
  constructor(private http:HttpClient) { }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}

