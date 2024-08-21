import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './Components/products/products.component';
import { SuggestedProductsComponent } from './Components/suggested-products/suggested-products.component';
import { HomeComponent } from './Components/home/home.component';
import { Product2Component } from './Components/product2/product2.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderComponent } from './Components/order/order.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

import { OpenProductsDetailsDirective } from './directives/open-products-details.directive';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import{ProdDataService} from'./Service/prod-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuggestedProductsComponent,
    HomeComponent,
    Product2Component,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,

    OpenProductsDetailsDirective,
    LoginComponent,
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProdDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
