import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms'
import { LamiraService } from 'src/app/servier/lamira.service';

@Component({
  selector: 'app-update-lamira',
  templateUrl: './update-lamira.component.html',
  styleUrls: ['./update-lamira.component.scss']
})
export class UpdateLamiraComponent implements OnInit {

  constructor(private myService:LamiraService) { }

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
