import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {CategoryProductsComponent} from "./categories-page/category-products/category-products.component";




const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'categories', redirectTo: 'categories/automotive', pathMatch: "full"},
  {path: 'categories', component: CategoriesPageComponent, children: [
      {path: ':currentCategory', component: CategoryProductsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
