import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Router} from '@angular/router';
import {ProductModel} from '../products/product.model';
import {formatCurrency } from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title:String = "Add Product";

  constructor(private productService: ProductsService,private router: Router) { }
  productItem= new ProductModel(null,null,null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
  }
AddProduct(){
  this.productService.newProduct(this.productItem);
  alert("Successfully added");
  this.router.navigate(['/']);
}
}
