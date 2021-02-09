import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from  '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title = ' LOGIN';
user={username:'',password:''}

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    if(this._auth.isLoggedIn())
    this._router.navigateByUrl('/userprofile');
  }
  loginUser(){
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/shop'])
      }
    )
  }
  
}
