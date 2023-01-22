import { Component, OnInit } from '@angular/core';
import { KafiraService } from 'src/app/servier/kafira.service';
import { CartServeService } from 'src/cartServe/cart-serve.service';


@Component({
  selector: 'app-kafira',
  templateUrl: './kafira.component.html',
  styleUrls: ['./kafira.component.scss']
})
export class KafiraComponent implements OnInit {
  kafiar:any;

  kafiarcartFood :any[] = []

  constructor(private myService:KafiraService,   private kafira:CartServeService) { }

  ngOnInit(): void {
    this.myService.getAllData().subscribe(
     {
      next:(x)=>{this.kafiar=x}
     }
    )
  }
  addTOCart(event:any){
   this.myService.addnewData({
    owner:{
      name:"ahmed"
    },
    items:[{itemId:this.kafiar.id,name:this.kafiar.name, quantity:2}]
   })  ;
  }

}
