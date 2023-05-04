import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  //@Input() productId!: number;
  @Input() product!: Product;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    //this.product = this.productsService.getProductById(this.productId);
  }
}
