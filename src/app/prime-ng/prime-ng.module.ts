import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {RippleModule} from "primeng/ripple";
import {CarouselModule} from "primeng/carousel";
import {DividerModule} from "primeng/divider";
import {ImageModule} from "primeng/image";
import { DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    ToastModule,
    MenuModule,
    OverlayPanelModule,
    RippleModule,
    CarouselModule,
    DividerModule,
    ImageModule,
    DataViewModule
  ],
  exports: [
    ConfirmDialogModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    ToastModule,
    MenuModule,
    OverlayPanelModule,
    RippleModule,
    CarouselModule,
    DividerModule,
    ImageModule,
    DataViewModule
   ]
})
export class PrimeNgModule { }
