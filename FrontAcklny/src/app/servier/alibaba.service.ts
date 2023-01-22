import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlibabaService {
  cartlist:any = [];
  foodlist = new BehaviorSubject<any>([]);

  private url='http://localhost:7009/api/alibaba'
  constructor( private alibaba:HttpClient) {
  }
  getAllData(){
    return this.alibaba.get(this.url)
  }

  updateData(id:any,data:any){
     return this.alibaba.patch(this.url+"/update/"+id,data)
  }
  addnewData(data:any){
    return this.alibaba.post(this.url,data)
  }
  deletData(id:any){
    return this.alibaba.delete(this.url+"/"+id) 
  }
}
