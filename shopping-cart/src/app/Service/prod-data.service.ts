import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProdDataService {
  private productsUrl = '/assets/json/product.json';

  constructor(private http: HttpClient) { }

// This method fetches products from the JSON file and returns them as an Observable.
  // The return type is specified as Observable<Product[]>, indicating that it emits an array of Product objects.
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
