import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import { WillerService } from './willer.service';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { LivrosComponent } from './livros/livros.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"livros", component:LivrosComponent},
  {path:"cadastroLivro", component:CadastroComponent},
  {path:"cadastroUsuario", component:CadastroUsuarioComponent},
  {path:"editarLivro/:isbnLivro/:autorLivro/:tituloLivro/:qtdExemplares/:_id", component:EditarComponent},
  {path:"editarUsuario/:cpf/:nome/:email/:telefone/:qtdLivrosEmprestados/:_id", component:EditarUsuarioComponent},
  //{path: "",pathMatch: "full"}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)] 
})
export class AppRoutingModule {

  constructor(
    private rota: ActivatedRoute,
    private local: Location,
    private servico: WillerService
  ){}
 }
