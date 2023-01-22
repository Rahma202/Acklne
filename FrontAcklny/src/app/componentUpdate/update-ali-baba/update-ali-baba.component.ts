import { Component, OnInit } from '@angular/core';
import { AlibabaService } from 'src/app/servier/alibaba.service';
import{FormGroup,FormControl}from '@angular/forms'

@Component({
  selector: 'app-update-ali-baba',
  templateUrl: './update-ali-baba.component.html',
  styleUrls: ['./update-ali-baba.component.scss']
})
export class UpdateAliBabaComponent implements OnInit {

  constructor(private myService:AlibabaService) { }

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
  updateItem(id:any){
    var newItem={name:this.newReg.value.name,price:+this.newReg.value.price}
      this.myService.updateData(id,newItem).subscribe()
   }
  
}
