import { Component,Input, OnInit } from '@angular/core';
import { ProdDataService } from 'src/app/Service/prod-data.service';
import { Product } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  @Input() view: 'grid' | 'list' | 'currcartitem' | 'prevcartitem' = 'grid';
  products: Product[] = [];

  constructor(private productService: ProdDataService , private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['product', productId]);
  }

}
