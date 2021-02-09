import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from './product.model';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  _id:string;
  i:number;
  title:string = "Toy Store";
  products:ProductModel[] | undefined;
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage:boolean = false;
  constructor(private productService:ProductsService,private http:HttpClient,private router:Router) { }
  toggleImage():void{
    this.showImage= !this.showImage;
  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
  editProductfn(item: ProductModel){
    this.router.navigate([`/edit/${item._id}`]); 
  }

  deleteProductfn(item:ProductModel){
    for(this.i=0;this.i<this.products.length;this.i++){
      if(item._id==this.products[this.i]._id){
        this.products.splice(this.i,1);
      }
    }
    this.productService.deleteProduct(item._id).subscribe(()=>{
    })
    this.router.navigate(['/']);
  }
}
