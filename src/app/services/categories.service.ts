import { Injectable } from '@angular/core';
import {Category} from "../categories/Category.model";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories!: Category[];

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(environment.backendHost+"/categories");
  }
}
