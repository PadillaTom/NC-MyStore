import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_model/category';
import { CategoryService } from 'src/app/_service/category.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.listCategories();
  }

  listCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
}
