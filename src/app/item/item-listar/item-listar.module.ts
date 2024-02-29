import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ItemListarModule { }
