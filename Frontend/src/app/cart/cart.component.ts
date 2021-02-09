import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductsService} from '../products.service';
import {ProductModel} from '../products/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalvalue;
orders;
products:ProductModel[] | undefined;
customer_orders=
[]

  constructor(private productservice:ProductsService) {
    this.orders=this.productservice.orders
        //  this.orders = this.productservice.orders
 
  for(let order of this.orders)
  {
  
      for(let productorder of this.products)
      {
          if(order.indexVal==productorder.productId)
                    {
                      console.log(productorder)
                      this.customer_orders.push({"id":productorder.productId, "name":productorder.productName , "price": productorder.price,"image":productorder.imageUrl})
                    }

            
      }
  
console.log(this.customer_orders)

    // console.log(this.customer_orders + "   orders from shopp")
  }
    
   }

  ngOnInit(): void {
  }

}
