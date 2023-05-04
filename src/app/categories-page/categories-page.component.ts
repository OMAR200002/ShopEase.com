import {Component, OnInit} from '@angular/core';
import {Product} from "../products/product.model";
import {ProductsService} from "../services/products.service";
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit{
  products!: Product[];
  currentCategory!: string;

  constructor(private productsService: ProductsService,
              private categoriesService: CategoriesService) {
  }
  ngOnInit() {
    //this.productsService.getProducts().subscribe()
  }
}
