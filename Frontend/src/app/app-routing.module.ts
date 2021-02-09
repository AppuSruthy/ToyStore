import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {ProductsComponent} from './products/products.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CustomersComponent} from './customers/customers.component';
import {CartComponent} from './cart/cart.component';
import {ShopComponent} from './shop/shop.component';
  import { from } from 'rxjs';

const routes: Routes = [{path:'',component:ShopComponent},
{path:'add',component:AddProductComponent},
{path:'edit/:id', component:EditproductComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'customer',component:CustomersComponent},
{path:'cart',canActivate:[AuthGuard],component:CartComponent},
{path:'product',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
