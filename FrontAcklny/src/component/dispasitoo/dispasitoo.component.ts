import { Component, OnInit } from '@angular/core';
import { DispacitooService } from 'src/app/servier/dispacitoo.service';

@Component({
  selector: 'app-dispasitoo',
  templateUrl: './dispasitoo.component.html',
  styleUrls: ['./dispasitoo.component.scss']
})
export class DispasitooComponent implements OnInit {

  data:any;

  getCartProducts2:any[] = []

  constructor(private myService:DispacitooService) { }

  ngOnInit(): void {
    this.myService.getAllData().subscribe(
     {
      next:(x)=>{this.data=x}
     }
    )
  }

  addTOCart(event:any){
    // console.log(event);
    // JSON.stringify()  ;      //  send data
    // JSON.parse()             //  recive data
    if("cart2" in localStorage){

      this.getCartProducts2 = JSON.parse( localStorage.getItem("cart2")!)

      let exist = this.getCartProducts2.find(item => item.item.id == event.item.id)     //prevent repeat of toy
      if (exist){
        alert("product is already in cart")
      }else{
        this.getCartProducts2.push(event)
      localStorage.setItem("cart2" , JSON.stringify(this.getCartProducts2))

      }

    }else{
      this.getCartProducts2.push(event)
      localStorage.setItem("cart2" , JSON.stringify(this.getCartProducts2))

    }

  }

}
