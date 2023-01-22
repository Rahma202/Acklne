import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DispacitooService } from 'src/app/servier/dispacitoo.service';

@Component({
  selector: 'app-add-despacitoo',
  templateUrl: './add-despacitoo.component.html',
  styleUrls: ['./add-despacitoo.component.scss']
})
export class AddDespacitooComponent implements OnInit {

  constructor(private myService:DispacitooService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  id:any;
 name:any;
 price:any;
 detials:any;
 srcImg:any;


  ali:any;
  nameItem:any
  newReg=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    price:new FormControl(),
    detials:new FormControl(),
    srcImg:new FormControl()
  })
  addProduct(){
    var data={
      id:+this.newReg.value.id,
      name:this.newReg.value.name,
      details:this.newReg.value.detials,
      img:this.newReg.value.srcImg,
      price:+this.newReg.value.price
    }
      this.myService.addnewData(data).subscribe();
      this.id=""
      this.name=""
      this.detials=""
        this.srcImg=""
       this.price=""

  }
  goBack(){
    history.back()
  }

}
