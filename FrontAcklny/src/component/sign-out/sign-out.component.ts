import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(private signout:HttpClient,private cookieService:CookieService) {}
  private url="http://localhost:7009/users/logout";  
  token=localStorage.getItem("token")
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization":`${this.token}`
      
     
    })} 

  ngOnInit(): void {
  }
 signoutM(){


  return this.signout.get(this.url,this.httpOptions).subscribe(
    {
      next:()=>{
        this.cookieService.deleteAll()
        
        localStorage.removeItem("user");
        localStorage.removeItem("token");

       window.location.assign("home")
      }
    }
  );
  
 }
}
