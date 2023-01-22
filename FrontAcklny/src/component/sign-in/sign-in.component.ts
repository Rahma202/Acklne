import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { json } from 'body-parser';
import {CookieService} from 'ngx-cookie-service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent  {

   httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "auth_token":"uyiu"
      
     
    })}

  title ='material-signIn';

  error:string ='';

  constructor(private signIn:HttpClient,private cookieService:CookieService) {}
   private url="http://localhost:7009/api/login";
  signInForm = new FormGroup ({

    email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(
      '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
    )]),

    password: new FormControl(null),

  });

 userDetial:any;
  user(){
  this.signIn.post(this.url,this.signInForm.value,this.httpOptions).subscribe(
    {
      next:(res:any)=>{

        localStorage.setItem("user",JSON.stringify(res.user))
        localStorage.setItem("email",JSON.stringify(res.user.email))
        localStorage.setItem("token",JSON.stringify(res.token))
        this.cookieService.set('auth_token',res.token);
        this.cookieService.set('auth',res.user);

        if(res.user.role=="alibabaAdmin"){
          window.location.assign("UpdateAli")
        } else  if(res.user.role=="balaconaAdmin"){
          window.location.assign("updateBalacona")
        } else  if(res.user.role=="lamiraAdmin"){
          window.location.assign("updatelamira")
        } else  if(res.user.role=="julyAdmin"){
          window.location.assign("updateYouly")
        } else  if(res.user.role=="desbacitoAdmin"){
          window.location.assign("updatedespacitoo")
        }else  if(res.user.role=="kafiarAdmin"){
          window.location.assign("updatekafira")
        }else  if(res.user.role=="user"){
          window.location.assign("home")
        }
      },
     error:(error)=>{
      console.log(error);
      
     }    })
  }



}
