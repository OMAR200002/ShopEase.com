import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Category} from "../../categories/Category.model";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss']
})
export class PanelMenuComponent implements OnInit{
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

  ngOnInit() {
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
