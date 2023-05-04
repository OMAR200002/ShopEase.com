import {Component, OnInit} from '@angular/core';
import {Category} from "./Category.model";
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
    categories!: Category[];
    responsiveOptions : any[]=[
    {
      breakpoint: '1200px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '992px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '500px',
      numVisible: 1,
      numScroll: 1
    },
  ]

    constructor(private categoriesService: CategoriesService) {
    }
  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: (data)=>{
        this.categories = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
