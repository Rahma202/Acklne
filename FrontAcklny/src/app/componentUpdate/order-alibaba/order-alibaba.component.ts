import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartServeService } from 'src/cartServe/cart-serve.service';

@Component({
  selector: 'app-order-alibaba',
  templateUrl: './order-alibaba.component.html',
  styleUrls: ['./order-alibaba.component.scss']
})
export class OrderAlibabaComponent implements OnInit {

  constructor( private cart: CartServeService) { }
  cartfoodlist:any;

  ngOnInit(): void {
  
      this.cart.getAlibabaorders().subscribe({next:(res)=>{
        this.cartfoodlist=res
        console.log(res);
        console.log(this.cartfoodlist[0].items );
        
      }})
    }

}
