import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdDataService } from 'src/app/Service/prod-data.service';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
// imageIndex:number=1;
// products: Product[] = [];
productId: number | undefined;
product: Product | undefined;

//takes two parameters: route (of type ActivatedRoute) and
// productService (of type ProdDataService).
constructor(private route: ActivatedRoute,
  private productService: ProdDataService) { }

ngOnInit(): void {

  //This line subscribes to changes in the route parameters using
  // the params observable provided by ActivatedRoute
  this.route.params.subscribe((params) => {
    this.productId = +params['id'];

  //ye line calls karengi getProducts method of the productService,jo retrieve karenga list of products.
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((p) => p.id === this.productId);
    });
  });


  // this.productService.getProducts().subscribe((data: Product[]) => {
  //   this.products = data;
  // });
}
}
