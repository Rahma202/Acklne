import { Component, OnInit } from '@angular/core';
import { BalaconaService } from 'src/app/servier/balacona.service';

@Component({
  selector: 'app-balacona',
  templateUrl: './balacona.component.html',
  styleUrls: ['./balacona.component.scss']
})
export class BalaconaComponent implements OnInit {


  balaconacartFood:any[] = []
  balacona:any;


  constructor(private myService:BalaconaService) { }

  ngOnInit(): void {
    this.myService.getAllData().subscribe(
     {
      next:(x)=>{this.balacona=x}
     }
    )
  }

  addTOCart(event:any){
    // console.log(event);
    // JSON.stringify()  ;      //  send data
    // JSON.parse()             //  recive data
    if("cart1" in localStorage){

      this.balaconacartFood = JSON.parse( localStorage.getItem("cart1")!)

      let exist = this.balaconacartFood.find(item => item.item.id == event.item.id)     //prevent repeat of toy
      if (exist){
        alert("product is already in cart")
      }else{
        this.balaconacartFood.push(event)
      localStorage.setItem("cart1" , JSON.stringify(this.balaconacartFood))

      }

    }else{
      this.balaconacartFood.push(event)
      localStorage.setItem("cart1" , JSON.stringify(this.balaconacartFood))

    }

  }








}
