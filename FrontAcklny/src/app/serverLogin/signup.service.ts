import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  token=localStorage.getItem("token")

httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization":`${this.token}`
    
   
  })}
  constructor(private signUp:HttpClient) { }
  private url="http://localhost:7009/api/register";
  private urlUpdate= "http://localhost:7009/users/me";
  addNewUser(data:any){
  return  this.signUp.post(this.url,data)
  }
  updateUser(data:any){
    return this.signUp.patch(this.urlUpdate,data,this.httpOptions)
  }
}
