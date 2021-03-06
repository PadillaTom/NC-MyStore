import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductsService } from 'src/app/_service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  detailedProduct: Product = new Product();
  activeImageUrl: string;
  stars: number = 0;
  selectedIndex: number = null;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    const prodId: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductDetails(prodId).subscribe((data) => {
      this.detailedProduct = data;
      this.activeImageUrl = data.imageProfile.urlImage;
      this.stars = data.rating;
    });
  }
  setIndex(index: number, url: string) {
    this.selectedIndex = index;
    this.activeImageUrl = url;
  }
}
