import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';
import { Observable } from 'rxjs';
import { Item } from '../../item.model';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrl: './item-listar.component.scss'
})
export class ItemListarComponent implements OnInit {

  itens$!: Observable<Item[]>;

  colunasTabela = ['id', 'acoes', 'produto', 'quantidade', 'descricao'];

  constructor(private itemService: ItemService) {  }

  ngOnInit(){
    this.listarItens();
  }

  listarItens(){
    this.itens$ = this.itemService.listar();
  }
}
