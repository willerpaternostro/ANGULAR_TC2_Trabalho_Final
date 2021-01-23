import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { WillerService } from '../willer.service';
import { Router } from '@angular/router';
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


  constructor(
    private router: Router,
    private servico: WillerService) { }

  ngOnInit(): void {
    
  }

  adicionarUsuario(){
    console.log(this.usuarioAdd)
    console.log("Chamou adicionarUsuario");
    this.servico.adicionarUsuario(this.usuarioAdd).subscribe(res => {console.log(res),this.retorno()});
  }
  retorno():void{
    console.log("Cadastrado com sucesso!")
    this.usuarioAdd._id=''
    this.usuarioAdd.cpf = ''
    this.usuarioAdd.nome = ''
    this.usuarioAdd.email = ''
    this.usuarioAdd.telefone = ''
    this.usuarioAdd.qtdLivrosEmprestados = 0
    this.router.navigateByUrl("/usuarios")
  }
}
