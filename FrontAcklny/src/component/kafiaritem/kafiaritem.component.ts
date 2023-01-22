import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kafiaritem',
  templateUrl: './kafiaritem.component.html',
  styleUrls: ['./kafiaritem.component.scss']
})
export class KafiaritemComponent implements OnInit {

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
