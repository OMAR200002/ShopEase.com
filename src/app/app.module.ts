import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppLayoutModule} from "./layout/app.layout.module";
import {PrimeNgModule} from "./prime-ng/prime-ng.module";
import { BannerComponent } from './ui/banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { HeroSectionComponent } from './hero-section/hero-section.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { MainTitleComponent } from './ui/main-title/main-title.component';
import { DiscountSectionComponent } from './discount-section/discount-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ServiceComponent } from './services-section/service/service.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { PanelMenuComponent } from './categories-page/panel-menu/panel-menu.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryProductsComponent } from './categories-page/category-products/category-products.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavBarComponent,
    HeroSectionComponent,
    ProductsComponent,
    ProductComponent,
    CategoriesComponent,
    CategoryComponent,
    MainTitleComponent,
    DiscountSectionComponent,
    ServicesSectionComponent,
    ServiceComponent,
    LandingPageComponent,
    CategoriesPageComponent,
    PanelMenuComponent,
    CategoryProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppLayoutModule,
    PrimeNgModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
