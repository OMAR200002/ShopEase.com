import { Injectable } from '@angular/core';
import {Product} from "../products/product.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products!: Product;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Array<Product>>{
    let queryParams = new HttpParams();
    queryParams =  queryParams.append('page',0);
    queryParams =  queryParams.append('size',6);
    return this.http.get<Array<Product>>(environment.backendHost+"/products",{params: queryParams});
  }

  getProductByCategory(categoryTitle: string): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendHost+"/categories/"+categoryTitle);
  }
}
