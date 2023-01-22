import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlibabaService } from 'src/app/servier/alibaba.service';

@Component({
  selector: 'app-alitem',
  templateUrl: './alitem.component.html',
  styleUrls: ['./alitem.component.scss'],
})
export class AlitemComponent implements OnInit {
  constructor(private myService: AlibabaService) {}

  @Input() product: any;
  @Output() item = new EventEmitter();

  addButton: boolean = false;
  amount: number = 0;

  ngOnInit(): void {}

  add() {
   if(localStorage.getItem("user")){
    this.item.emit({
      user:localStorage.getItem("email"),
       id: this.product.id,
       itemId: this.product._id,
       quantity: this.amount,
       img:this.product.img,
 
     });
   }
   else{
    alert("please sign in website")
   }
  }

  ratingCount=0;
  totalRating=0;
  finalRating: any

ratingControl = new FormControl(0)

getRating(){

 const user = localStorage.getItem("email")





  // this.ratingCount++;
  // this.totalRating += this.ratingControl?.value || 0

  // console.log(this.ratingControl.value)

  // this.finalRating = (this.totalRating / this.ratingCount).toFixed(2)
}







}

// this.item.emit({user:localStorage.getItem("user"),itemId:this.product._id, quantity:this.amount})
