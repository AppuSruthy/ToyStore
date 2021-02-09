import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service'
import { from } from 'rxjs';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any){
let authService = this.injector.get(AuthService)
let tokenizedReq = req.clone(
  {
    setHeaders:{
      Authorization:`Bearer ${authService.getToken()}`
    }
  }
)
return nxt.handle(tokenizedReq)
  }
}
