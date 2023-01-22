import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoulyService {

  private url='http://localhost:7009/api/23july'
  constructor( private july:HttpClient) { 
   
  }
  getAllData(){
    return this.july.get(this.url)
  }
  updateData(id:any,data:any){
    return this.july.patch(this.url+"/update/"+id,data)
 }
 addnewData(data:any){
   return this.july.post(this.url,data)
 }
 deletData(id:any){
   return this.july.delete(this.url+"/"+id) 
 }
 }
