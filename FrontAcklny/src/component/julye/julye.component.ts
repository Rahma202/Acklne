import { Component, OnInit } from '@angular/core';
import { JoulyService } from 'src/app/servier/jouly.service';

@Component({
  selector: 'app-julye',
  templateUrl: './julye.component.html',
  styleUrls: ['./julye.component.scss']
})
export class JulyeComponent implements OnInit {

  data:any;
  julycartFood:any[] = []
  constructor(private myService:JoulyService) { }

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
      if("cart3" in localStorage){

        this.julycartFood = JSON.parse( localStorage.getItem("cart3")!)

        let exist = this.julycartFood.find(item => item.item.id == event.item.id)     //prevent repeat of toy
        if (exist){
          alert("product is already in cart")
        }else{
          this.julycartFood.push(event)
        localStorage.setItem("cart3" , JSON.stringify(this.julycartFood))

        }

      }else{
        this.julycartFood.push(event)
        localStorage.setItem("cart3" , JSON.stringify(this.julycartFood))

      }

    }






}
