import { Component, OnInit } from '@angular/core';
import { KafiraService } from 'src/app/servier/kafira.service';
import{FormGroup,FormControl}from '@angular/forms'

@Component({
  selector: 'app-updatecafira',
  templateUrl: './updatecafira.component.html',
  styleUrls: ['./updatecafira.component.scss']
})
export class UpdatecafiraComponent implements OnInit {

  constructor(private myService:KafiraService) { }
  
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
