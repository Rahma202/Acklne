import { Component, OnInit } from '@angular/core';
import { LamiraService } from 'src/app/servier/lamira.service';

@Component({
  selector: 'app-lamira',
  templateUrl: './lamira.component.html',
  styleUrls: ['./lamira.component.scss']
})
export class LamiraComponent {
  data:any;
  lamiracartFood:any[] = []
  constructor(private myService:LamiraService) { }

  ngOnInit(): void {
    this.myService.getAllData().subscribe(
     {
      next:(x)=>{this.data=x}
     }
    )
    }
    addTOCart(event:any){
      // console.log(event);
      // JSON.stringify()  ;      //  send data
      // JSON.parse()             //  recive data
      if("cart5" in localStorage){

        this.lamiracartFood = JSON.parse( localStorage.getItem("cart5")!)

        let exist = this.lamiracartFood.find(item => item.item.id == event.item.id)     //prevent repeat of toy
        if (exist){
          alert("product is already in cart")
        }else{
          this.lamiracartFood.push(event)
        localStorage.setItem("cart5" , JSON.stringify(this.lamiracartFood))

        }

      }else{
        this.lamiracartFood.push(event)
        localStorage.setItem("cart5" , JSON.stringify(this.lamiracartFood))

      }

    }
}
