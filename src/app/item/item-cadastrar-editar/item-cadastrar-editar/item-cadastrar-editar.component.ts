import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../item.model';
import { response } from 'express';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrl: './item-cadastrar-editar.component.scss'
})
export class ItemCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup;
  item!: Item;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data["item"]

    if(this.item && !this.item.id){
      this.formGroup = this.formBuilder.group({

        produto: ["", [
          Validators.required,
          Validators.minLength(2)
        ]],
        quantidade: [0],
        descricao: [""]
      })

    } else {

      this.formGroup = this.formBuilder.group({

        id: [this.item.id],
        produto: [this.item.produto, [
          Validators.required,
          Validators.minLength(2)
        ]],
        quantidade: [this.item.quantidade],
        descricao: [this.item.descricao]
      })

    }
  }

  salvar(){

    if(this.item && this.item.id){
      this.itemService.atualizar(this.formGroup.value).subscribe(
        itemAtualizado => {
          this.route.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao atualizar " + JSON.stringify(error))
        }
      )
    } else {
      this.itemService.cadastrar(this.formGroup.value).subscribe(
        itemCadastrado => {
          this.route.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao cadastrar " + JSON.stringify(error))
        }
      )
    }
  }

  deletar(){
    if(confirm("Deseja deletar o item " + this.item.produto)){
      this.itemService.deletar(this.item).subscribe(
        response => {
          this.route.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao deletar " + JSON.stringify(error))
        }
      )
    }
  }
}
