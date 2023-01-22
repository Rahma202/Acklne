import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JoulyService } from 'src/app/servier/jouly.service';

@Component({
  selector: 'app-add-youly',
  templateUrl: './add-youly.component.html',
  styleUrls: ['./add-youly.component.scss']
})
export class AddYoulyComponent {

  constructor(private myService:JoulyService) { }

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
