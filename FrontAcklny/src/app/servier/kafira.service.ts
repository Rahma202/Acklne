import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KafiraService {
private url='http://localhost:7009/api/kafira/'
  constructor( private kafira:HttpClient) { 
   
  }
  getAllData(){
    return this.kafira.get(this.url)
  }
  getById(id:any){
    return this.kafira.get(this.url+"/id"+id)
  }
  updateData(id:any,data:any){
    return this.kafira.patch(this.url+"/update/"+id,data)
 }
 addnewData(data:any){
   return this.kafira.post(this.url,data)
 }
 deletData(id:any){
   return this.kafira.delete(this.url+"/"+id) 
 }
}
