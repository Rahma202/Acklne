import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/serverLogin/signup.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  title = 'signupForm';

  error:string ='';

  constructor(private myServie:SignupService) { }
errorRegit="";
   registerForm = new FormGroup ({
   
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
  
   return this.myServie.updateUser(this.registerForm.value).subscribe({
      next:(res:any)=>{

        console.log(res);
        localStorage.setItem("user",JSON.stringify(res))
        
        
          },
    error:(error:any)=>{
       console.log(error);
       
    }

  })
}
}
