import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
 user:any=localStorage.getItem("user")
 data=JSON.parse(this.user);
 adminAli="alibabaAdmin"
  ngOnInit(): void {
  }

}
