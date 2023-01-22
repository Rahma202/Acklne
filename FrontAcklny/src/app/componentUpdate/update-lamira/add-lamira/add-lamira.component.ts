import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LamiraService } from 'src/app/servier/lamira.service';

@Component({
  selector: 'app-add-lamira',
  templateUrl: './add-lamira.component.html',
  styleUrls: ['./add-lamira.component.scss']
})
export class AddLamiraComponent  {
  constructor(private myService:LamiraService) { }

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
