import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro';
import { WillerService } from '../willer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  resultadoAdd:Livro = {
    _id:'',
    isbnLivro : '',
    autorLivro : '',
    tituloLivro : '',
    qtdExemplares : 0
  }
  livroAdd: Livro = {
    _id:"",
    isbnLivro : '',
    autorLivro : '',
    tituloLivro : '',
    qtdExemplares : 0
  }
 
  constructor(private servico: WillerService, private router: Router,) { }

  ngOnInit(): void {
    this.livroAdd.isbnLivro = ""
  }

  adicionarLivro(){
    console.log("Adicionando Livro...");
    this.servico.adicionarLivro(this.livroAdd).subscribe(res => {this.resultadoAdd = res,this.retornoAdicionarLivro(res)});
  }
  retornoAdicionarLivro(item:Livro):void{
    console.log(item)
    this.livroAdd.isbnLivro = ""
    this.livroAdd.autorLivro = ""
    this.livroAdd.tituloLivro = ""
    this.livroAdd.qtdExemplares = 0
    alert("Livro cadastrado com sucesso!")
    this.router.navigateByUrl("/livros")
  }
}
