import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import {ProductModel} from '../products/product.model';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id:string;
  title:String ='Update Product';
  constructor(private productService: ProductsService, private router:Router,private route: ActivatedRoute) { }
  productItem=new ProductModel(null,null,null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number         
      console.log(this.id);
    });

 

}
EditProduct(){
  this.productService.editProduct(this.id,this.productItem);
  this.productService.selectedProduct=this.productItem;
  alert("successfully edited");
  this.router.navigate(['/']);
}
}