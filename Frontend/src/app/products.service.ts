import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProductModel} from './products/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly baseurl='http://localhost:3000/products';
  selectedProduct:ProductModel;
  public totalSubject = new Subject()



  constructor( private http:HttpClient) { }
  orders=[]
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item: ProductModel){
    return this.http.post(this.baseurl+'/insert',{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  editProduct(_id:string,item:ProductModel){
    return this.http.put(this.baseurl+`/${_id}`,{"product":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
  deleteProduct(_id:string){
    return this.http.delete(this.baseurl+`/${_id}`)
  }
  sendTotal(totalVal)

    { 
      
      
      this.totalSubject.next(totalVal)
    }

}
