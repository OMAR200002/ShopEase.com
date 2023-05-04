import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../products/product.model";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit{

  currentCategory!: string;
  products!: Product[];
  constructor(private router: ActivatedRoute,
              private productsService: ProductsService) {
  }
  ngOnInit(): void {
   this.router.params.subscribe(value => {
     this.currentCategory = value['currentCategory'];
     this.productsService.getProductByCategory(this.currentCategory).subscribe({
       next: value => {
         this.products = value;
       },
       error: err => {
         console.log(err);
       }
     });
   });

  }

}
