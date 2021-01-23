import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { WillerService } from '../willer.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  meusUsuarios: Usuario[] = [];

  constructor(private servico: WillerService) { }

  ngOnInit(): void {
  }
  obterUsuarios():void{
    this.servico.obterUsuarios().subscribe(res => { console.log(res),this.meusUsuarios = res})
  }
  excluirUsuario(id:string){
    if(confirm("Deseja mesmo excluir?"))
      this.servico.excluirLivro(id).subscribe(res => {
        console.log(res),
        this.obterUsuarios()
      });
  }

}
