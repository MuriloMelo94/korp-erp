import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "estoque",
    loadChildren: () => import('./estoque/estoque-listar/estoque-listar.module').then(modulo => modulo.EstoqueListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
