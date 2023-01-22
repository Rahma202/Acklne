import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServeService {
  private url='http://localhost:7009/alibaba'
  private balaconaurl='http://localhost:7009/balacona'













  itemId:any
  token=localStorage.getItem("token")
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization":`${this.token}`


    })}


  constructor(private http:HttpClient) { }


postAlibabaCart(data:any){
  return this.http.post(this.url +'/cart',data)
 }


 getAlibabaProductinCart(){
  return this.http.get(this.url + '/cart',this.httpOptions)
}

deleteAlibabaProductfromCart(itemId:any){
  return this.http.delete(this.url + `/cart?itemId=${itemId}` ,this.httpOptions)
}

// ///////////////////   balacona    ////////////////////////////

postbalaconaCart(data:any){
  return this.http.post(this.url +'/cart',data)
 }

 getbalaconaProductinCart(){
  return this.http.get(this.url + '/cart',this.httpOptions)
}

deletebalaconaProductfromCart(itemId:any){
  return this.http.delete(this.url + `/cart?itemId=${itemId}` ,this.httpOptions)
}

//////////////////////////////////////////////////////////////





getAlibabaorders(){
  return this.http.get(this.url+'/allcart')

}    



  // // ////////        back rahma       ////////////////


  // addAlibabaCart(data:any){
  //  return this.http.post(this.url + '/alibaba/cart' ,data)
  // }


  // getAlibabaCart(){
  //   return this.http.get(this.url + '/alibaba/cart')

  // }

  // deleteAlibabaitemfromCart(id:any){
  //   return this.http.delete(this.url + '/alibaba/cart/' + id)
  // }

}


