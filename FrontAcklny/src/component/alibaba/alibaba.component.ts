import { Component, OnInit } from '@angular/core';
import { AlibabaService } from 'src/app/servier/alibaba.service';
import { CartServeService } from 'src/cartServe/cart-serve.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-alibaba',
  templateUrl: './alibaba.component.html',
  styleUrls: ['./alibaba.component.scss'],
})
export class AlibabaComponent implements OnInit {
  cartFood: any;
  token=localStorage.getItem("token")
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization":`${this.token}`


    })}

  constructor(
    private myService: AlibabaService,
    private cart: CartServeService
  ) {}

  ali: any;
  ngOnInit(): void {
    this.myService.getAllData().subscribe({
      next: (x) => {
        this.ali = x;
      },
    });
  }
  addTOCart(event: any) {
    console.log(localStorage.getItem('user'))
    console.log(event)
    this.cart.postAlibabaCart( event).subscribe({
      next: (data) => {console.log( data )},
      error: (error) => {
         console.log(error);
      },
    });
  }
 getCart() {
  
    this.cart.getAlibabaProductinCart().subscribe({next:(res)=>{
      this.cartFood=res
      console.log(this.cartFood.items.findIndex(
        (object:any) => {
          return object.itemId === '638f3c826dede15e5fd4fcfb';
        }
        ));
      
    }})
    
  }


}
