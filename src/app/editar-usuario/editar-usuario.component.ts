import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {Location} from "@angular/common";
import { Usuario } from '../Usuario';
import { WillerService } from '../willer.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioEditar: Usuario = {
    id:'',
    cpf : '',
    nome : '',
    email : '',
    telefone : '',
    qtdLivrosEmprestados : 0,
  }
  id:string =' '
  cpf : string = ''
  nome :string = ''
  email : string = ''
  telefone : string =  ''
  qtdLivrosEmprestados : number = 0


  constructor(
    private rota: ActivatedRoute,
    private local: Location,
    private router: Router,
    private servico: WillerService) { }


  ngOnInit(): void {
    this.getParametros()
  }
  getParametros(){
    this.cpf = String( this.rota.snapshot.paramMap.get("cpf"));
    this.nome = String(this.rota.snapshot.paramMap.get("nome"));
    this.email = String(this.rota.snapshot.paramMap.get("email"));
    this.telefone = String( this.rota.snapshot.paramMap.get("telefone"));
    this.qtdLivrosEmprestados = Number( this.rota.snapshot.paramMap.get("qtdLivrosEmprestados"));
    this.id = String( this.rota.snapshot.paramMap.get("id"));

    this.usuarioEditar.cpf = this.cpf
    this.usuarioEditar.nome = this.nome
    this.usuarioEditar.email = this.email
    this.usuarioEditar.telefone = this.telefone
    this.usuarioEditar.qtdLivrosEmprestados = this.qtdLivrosEmprestados
    this.usuarioEditar.id = this.id
  }
  editarUsuario(){
    console.log("Notícia publicada");
    this.servico.editarUsuario(this.usuarioEditar).subscribe(res => {console.log(res),this.retorno()});
  }
  retorno():void{
    alert("Livro editado com sucesso!"),
    this.usuarioEditar.cpf = ""
    this.usuarioEditar.nome = ""
    this.usuarioEditar.email = ""
    this.usuarioEditar.telefone = ""
    this.usuarioEditar.qtdLivrosEmprestados = 0
    this.usuarioEditar.id = ""
    this.router.navigateByUrl("/usuarios")
  }
}
