import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-julyitem',
  templateUrl: './julyitem.component.html',
  styleUrls: ['./julyitem.component.scss']
})
export class JulyitemComponent implements OnInit {

  constructor() { }

  @Input() product: any;
  @Output() item = new EventEmitter()

  addButton:boolean = false
  amount:number = 0


  ngOnInit(): void {
  }

  add(){
    this.item.emit({item:this.product , quantity: this.amount})

    }




}
