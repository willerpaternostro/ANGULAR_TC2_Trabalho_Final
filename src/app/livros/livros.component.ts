import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro';
import { WillerService } from '../willer.service';
@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  

  constructor(private servico: WillerService) { }
  
  meusLivros: Livro[] = [];
  resposta:string =""

  ngOnInit(): void {
    this.obterLivros()
  }
  obterLivros():void{
    this.servico.obterLivros().subscribe(res => { console.log(res),this.meusLivros = res})
  }
  excluirLivro(id:string){
    if(confirm("Deseja mesmo excluir?"))
      this.servico.excluirLivro(id).subscribe(res => {
        console.log(res),
        this.obterLivros()
      });
  }
}
