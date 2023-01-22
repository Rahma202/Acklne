import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalaconaService {

  private url='http://localhost:7009/api/balacona'
  constructor( private balacona:HttpClient) { 
   
  }
  getAllData(){
    return this.balacona.get(this.url)
  }
  updateData(id:any,data:any){
    return this.balacona.patch(this.url+"/update/"+id,data)
 }
 addnewData(data:any){
   return this.balacona.post(this.url,data)
 }
 deletData(id:any){
   return this.balacona.delete(this.url+"/"+id) 
 }
}
