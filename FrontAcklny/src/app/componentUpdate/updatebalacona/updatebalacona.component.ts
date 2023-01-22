import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BalaconaService } from 'src/app/servier/balacona.service';
import { BalaconaComponent } from 'src/component/balacona/balacona.component';

@Component({
  selector: 'app-updatebalacona',
  templateUrl: './updatebalacona.component.html',
  styleUrls: ['./updatebalacona.component.scss']
})
export class UpdatebalaconaComponent implements OnInit {

  constructor(private myService:BalaconaService) { }

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
