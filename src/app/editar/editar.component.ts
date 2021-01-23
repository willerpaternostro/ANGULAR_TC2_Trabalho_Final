import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {Location} from "@angular/common";
import { Livro } from '../Livro';
import { WillerService } from '../willer.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  resultadoAdd:Livro = {
    id:"",
    isbnLivro : '',
    autorLivro : '',
    tituloLivro : '',
    qtdExemplares : 0
  }
  livroEditar: Livro = {
    id:"",
    isbnLivro : '',
    autorLivro : '',
    tituloLivro : '',
    qtdExemplares : 0
  }
  isbnLivro:string = "";
  autorLivro:string = "";
  tituloLivro:string = "";
  qtdExemplares:number = 0;
  id:string=""

  constructor(
    private rota: ActivatedRoute,
    private local: Location,
    private router: Router,
    private servico: WillerService) { }

  ngOnInit(): void {
    this.getParametros();
  }

  getParametros(){
    this.isbnLivro = String( this.rota.snapshot.paramMap.get("isbnLivro"));
    this.autorLivro = String(this.rota.snapshot.paramMap.get("autorLivro"));
    this.tituloLivro = String(this.rota.snapshot.paramMap.get("tituloLivro"));
    this.qtdExemplares = Number( this.rota.snapshot.paramMap.get("qtdExemplares"));
    this.id = String( this.rota.snapshot.paramMap.get("id"));

    this.livroEditar.isbnLivro = this.isbnLivro
    this.livroEditar.autorLivro = this.autorLivro
    this.livroEditar.tituloLivro = this.tituloLivro
    this.livroEditar.qtdExemplares = this.qtdExemplares
    this.livroEditar.id = this.id
  }
  editarLivro(){
    console.log("Notícia publicada");
    this.servico.editarLivro(this.livroEditar).subscribe(res => {console.log(res),this.resultadoAdd=res,this.retorno()});
  }
  retorno():void{
    alert("Livro editado com sucesso!"),
    this.livroEditar.isbnLivro = ""
    this.livroEditar.autorLivro = ""
    this.livroEditar.tituloLivro = ""
    this.livroEditar.qtdExemplares = 0
    this.livroEditar.id = "",
    this.router.navigateByUrl("/livros")

  }
}
