import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ItemListarRoutingModule } from './item-listar-routing.module';
import { ItemListarComponent } from './item-listar/item-listar.component';


@NgModule({
  declarations: [
    ItemListarComponent
  ],
  imports: [
    CommonModule,
    ItemListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class ItemListarModule { }
