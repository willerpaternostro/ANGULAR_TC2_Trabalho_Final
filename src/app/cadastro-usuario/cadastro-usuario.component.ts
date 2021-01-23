import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { WillerService } from '../willer.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  usuarioAdd: Usuario = {
    _id:'',
    cpf : '',
    nome : '',
    email : '',
    telefone : '',
    qtdLivrosEmprestados : 0,
  }
  resultadoAdd: Usuario = {
    _id:'',
    cpf : '',
    nome : '',
    email : '',
    telefone : '',
    qtdLivrosEmprestados : 0,
  }

  constructor(private servico: WillerService) { }

  ngOnInit(): void {
    
  }

  adicionarUsuario(){
    console.log(this.usuarioAdd)
    console.log("Chamou adicionarUsuario");
    this.servico.adicionarUsuario(this.usuarioAdd).subscribe(res => {this.resultadoAdd = res,console.log(res),this.retorno()});
  }
  retorno():void{
    console.log("Entrou retorno")
  }
}
