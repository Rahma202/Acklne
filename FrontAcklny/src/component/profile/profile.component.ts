import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  user:any=localStorage.getItem("user")
  data=JSON.parse(this.user);
  
  ngOnInit(): void {
  }

}
