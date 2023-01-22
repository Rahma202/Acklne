import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DispacitooService {

 
  private url='http://localhost:7009/api/desbacitoo'
  constructor( private disbasitoo:HttpClient) { 
   
  }
  getAllData(){
    return this.disbasitoo.get(this.url)
  }
  updateData(id:any,data:any){
    return this.disbasitoo.patch(this.url+"/update/"+id,data)
 }
 addnewData(data:any){
   return this.disbasitoo.post(this.url,data)
 }
 deletData(id:any){
   return this.disbasitoo.delete(this.url+"/"+id) 
 }
}
