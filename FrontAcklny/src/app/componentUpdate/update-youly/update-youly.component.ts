import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JoulyService } from 'src/app/servier/jouly.service';

@Component({
  selector: 'app-update-youly',
  templateUrl: './update-youly.component.html',
  styleUrls: ['./update-youly.component.scss']
})
export class UpdateYoulyComponent implements OnInit {

  
  constructor(private myService:JoulyService) { }

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
