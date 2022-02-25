import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseCategoriesUrl = 'http://localhost:8080/api/v1/category/active';

  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get<Category[]>(this.baseCategoriesUrl);
  }
}
