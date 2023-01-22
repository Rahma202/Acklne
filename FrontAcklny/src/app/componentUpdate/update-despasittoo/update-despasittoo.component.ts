import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DispacitooService } from 'src/app/servier/dispacitoo.service';

@Component({
  selector: 'app-update-despasittoo',
  templateUrl: './update-despasittoo.component.html',
  styleUrls: ['./update-despasittoo.component.scss']
})
export class UpdateDespasittooComponent  {
  constructor(private myService:DispacitooService) { }

  ali:any;
  nameItem:any
  newReg=new FormGroup({
    name:new FormControl(),
    price:new FormControl()
  })
  ngOnInit(): void {
    this.myService.getAllData().subscribe(
     {
      next:(x)=>{this.ali=x}
     }
    )
  }
  deletItem(id:any){
    this.myService.deletData(id).subscribe();
    location.reload()
  }
  item=document.getElementById("item")?.innerHTML;
  updateItem(id:any){
    var newItem={name:this.newReg.value.name,price:+this.newReg.value.price}
      this.myService.updateData(id,newItem).subscribe()
   }


  
}
