import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrl: './item-cadastrar-editar.component.scss'
})
export class ItemCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private route: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      produto: ["", [
        Validators.required,
        Validators.minLength(2)
      ]],
      quantidade: [0],
      descricao: [""]
    })
  }

  salvar(){
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
