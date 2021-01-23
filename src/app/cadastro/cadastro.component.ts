import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro';
import { LivrosComponent } from '../livros/livros.component';
import { WillerService } from '../willer.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  resultadoAdd:Livro = {
    id:'',
    isbnLivro : '',
    autorLivro : '',
    tituloLivro : '',
    qtdExemplares : 0
  }
  livroAdd: Livro = {
    id:"",
    isbnLivro : '',
    autorLivro : '',
    tituloLivro : '',
    qtdExemplares : 0
  }
 
  constructor(private servico: WillerService) { }

  ngOnInit(): void {
    this.livroAdd.isbnLivro = ""
  }

  adicionarLivro(){
    console.log("Livro adicionado");
    this.servico.adicionarLivro(this.livroAdd).subscribe(res => {this.resultadoAdd = res,this.retornoAdicionarLivro(res)});
  }
  retornoAdicionarLivro(item:Livro):void{
    console.log(item)
    this.livroAdd.isbnLivro = ""
    this.livroAdd.autorLivro = ""
    this.livroAdd.tituloLivro = ""
    this.livroAdd.qtdExemplares = 0
    alert("Livro cadastrado com sucesso!")
  }
}
