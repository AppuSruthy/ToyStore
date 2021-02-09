import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import { UserModel } from '../signup/user.model';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title:string = "Customer Data";
  users:UserModel[] | undefined;
  constructor(private authService:AuthService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
    })
  }

}
