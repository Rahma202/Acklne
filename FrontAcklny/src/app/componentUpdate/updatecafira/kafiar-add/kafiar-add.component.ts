import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms'
import { KafiraService } from 'src/app/servier/kafira.service';

@Component({
  selector: 'app-kafiar-add',
  templateUrl: './kafiar-add.component.html',
  styleUrls: ['./kafiar-add.component.scss']
})
export class KafiarAddComponent implements OnInit {

  constructor(private myService:KafiraService) { }

  ngOnInit(): void {
  }
  
  ali:any;
  id:any;
  name:any;
  price:any;
  detials:any;
  srcImg:any;
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
