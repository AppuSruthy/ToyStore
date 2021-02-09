import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { UserModel } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title = 'REGISTER';


  constructor(private fb:FormBuilder,private authService: AuthService,private router: Router) { }
  userItem= new UserModel(null,null,null,null,null);
registerForm=this.fb.group({
  FirstName:['',Validators.required],
  LastName:['',Validators.required],
  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  password:['',[Validators.minLength(6),Validators.required]],
  Cpassword:['',Validators.required],
  PhoneNo:['',[Validators.required,Validators.pattern("[0-9 ]{11}")]]
})
  ngOnInit(): void {
  }
  AddUser(){
    this.authService.addUser(this.userItem);
    alert("Successfully added");
    this.router.navigate(['/customer']);
  }
}

 