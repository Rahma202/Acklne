import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { response } from 'express';
import { SignupService } from 'src/app/serverLogin/signup.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  title = 'signupForm';

  error:string ='';

  constructor(private myServie:SignupService) { }
errorRegit="";
  registerForm = new FormGroup ({
   role:new FormControl("user"),
    name: new FormControl(null, [Validators.required]),

   email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(
      '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
    )]),

    phone: new FormControl(null, [Validators.required]),

    address: new FormControl(null, [Validators.required]),

    password: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
  }
  value=""
 newUser(){
   return this.myServie.addNewUser(this.registerForm.value).subscribe({
      next:(res)=>{
        this.errorRegit="";
        window.location.assign("signin")
          },
    error:(error)=>{
        this.errorRegit=error.error;
    }

  })
}
}
