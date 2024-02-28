import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueListarRoutingModule } from './estoque-listar-routing.module';
import { ItemListarComponent } from './item-listar/item-listar.component';


@NgModule({
  declarations: [
    ItemListarComponent
  ],
  imports: [
    CommonModule,
    EstoqueListarRoutingModule
  ]
})
export class EstoqueListarModule { }
