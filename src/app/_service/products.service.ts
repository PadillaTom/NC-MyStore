import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeaturedProduct } from '../_model/featuredProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseFeaturedProductsUrl = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  getFeaturedProducts() {
    return this.httpClient.get<FeaturedProduct[]>(this.baseFeaturedProductsUrl);
  }
}
