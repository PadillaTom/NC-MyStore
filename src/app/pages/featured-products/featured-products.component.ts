import { Component, OnInit } from '@angular/core';
import { FeaturedProduct } from 'src/app/_model/featuredProduct';
import { ProductsService } from 'src/app/_service/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  products: FeaturedProduct[];
  myError: number = 200;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchFeaturedProducts();
  }

  fetchFeaturedProducts() {
    this.productsService.getFeaturedProducts().subscribe({
      next: (response) => {
        this.products = response.slice(0, 8);
      },
      error: (err) => {
        this.myError = err.status;
      },
    });
  }
}
