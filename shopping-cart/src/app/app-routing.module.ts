import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderComponent } from './Components/order/order.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'carts', component: CartComponent },
  { path: 'orders', component: OrderComponent },

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PagenotfoundComponent },


 // Redirect to the '/products' route if the path is empty ('/') 
  { path: '', redirectTo: '/products', pathMatch: 'full' },

  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },

];

@NgModule({

  // yaha RouterModule ko import kiya hu are configure kiya hu defined routes ke sath 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
