import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import {ProductModel} from '../products/product.model';
import {ProductsService} from '../products.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any
  totalcartvalue = 0;
  value
  conditionToDisaply=false
  orders = []
title:String ="Shop"
  constructor(private productservice: ProductsService,public SnackBar:MatSnackBar) {
    
    this.products = productservice.getProducts
    
   }

   
  openSnackBar() {

  }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

  addToCart(indexValue, productId) {

    //snackbar notification

   if (this.products[indexValue].quantity != 0)
    {
        this.SnackBar.open( "  Added to Cart", this.products[indexValue].name,{ duration: 2000, })
    }
    else if(this.products[indexValue].quantity == 0)
    {
        this.SnackBar.open( "  Product Unavailable", this.products[indexValue].name,{ duration: 2000, })
    }
    this.totalcartvalue +=1 ;
    console.log(this.totalcartvalue + "cart value dsgsg")
    let count = 1
    let push = true
    console.log(indexValue + "   " + productId)
    if (this.products[indexValue].quantity == 0) {
    
      return

    }
    for (let ords of  this.productservice.orders) {
      if (ords.indexVal == indexValue) {
        console.log("index value already")
        ords.quantity++;
        push = false
        this.conditionToDisaply=true

      }
    }
    if (push) {
      this.productservice.orders.push({ "indexVal": indexValue, "quantity": count })
     this.conditionToDisaply=true
   }
   this.products[indexValue].quantity--;

 this.productservice.sendTotal(this.totalcartvalue);
 
 //send to service


   
 }

 //remove from cart


 removeFromCart(indexValue, propductId)
 {
   this.totalcartvalue-=1;
    this.products[indexValue].quantity++;
    for( let ord of  this.productservice.orders)
    {
      if(ord.indexVal==indexValue)
      {
        ord.quantity-=1
      }
    }

    this.SnackBar.open( "  Removed From Cart  ",this.products[indexValue].name, { duration: 2000, })
    this.productservice.sendTotal(this.totalcartvalue)
    
 

 }

//get quanity

getQuantity(i)
{
 for(let orders of  this.productservice.orders)
 {
     if(orders.indexVal==i)
     {
       return orders.quantity
     }
 }
}

show() {
  //  this.productservice.sendOrders(this.orders ) 
  console.log( this.productservice.orders)

   
}
}




