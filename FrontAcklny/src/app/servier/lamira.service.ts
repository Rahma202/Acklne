import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LamiraService {
 
  private url='http://localhost:7009/api/lamira'
  constructor( private lamira:HttpClient) { 
   
  }
  getAllData(){
    return this.lamira.get(this.url)
  }
  updateData(id:any,data:any){
    return this.lamira.patch(this.url+"/update/"+id,data);
 }
 addnewData(data:any){
   return this.lamira.post(this.url,data)
 }
 deletData(id:any){
   return this.lamira.delete(this.url+"/"+id) 
 }
}
