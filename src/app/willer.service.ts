import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {Livro} from './Livro'
import { Usuario } from './Usuario';


@Injectable({
  providedIn: 'root'
})

export class WillerService {

  constructor(private http: HttpClient) { }

  adicionarLivro(livroAdd:Livro):Observable<Livro>{
    return this.http.post<Livro>("https://willergmp.glitch.me/api/biblioteca?",{isbnLivro:livroAdd.isbnLivro,autorLivro:livroAdd.autorLivro,tituloLivro:livroAdd.tituloLivro,qtdExemplares:livroAdd.qtdExemplares});
  }
  adicionarUsuario(usuarioAdd:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("https://willergmp.glitch.me/api/biblioteca/user",{cpf:usuarioAdd.cpf,nome:usuarioAdd.nome, email:usuarioAdd.email, telefone:usuarioAdd.telefone,qtdLivrosEmprestados:usuarioAdd.qtdLivrosEmprestados});
  }

  editarLivro(editarLivro:Livro):Observable<Livro>{
    return this.http.put<Livro>("https://willergmp.glitch.me/api/biblioteca/"+editarLivro._id,{isbnLivro:editarLivro.isbnLivro,autorLivro:editarLivro.autorLivro,tituloLivro:editarLivro.tituloLivro,qtdExemplares:editarLivro.qtdExemplares});
  }
  editarUsuario(editarUsuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>("https://willergmp.glitch.me/api/biblioteca/user/"+editarUsuario._id,{cpf:editarUsuario.cpf,nome:editarUsuario.nome, email:editarUsuario.email, telefone:editarUsuario.telefone,qtdLivrosEmprestados:editarUsuario.qtdLivrosEmprestados});
  }

  obterLivros():Observable<Livro[]>{
    return this.http.get<Livro[]>("https://willergmp.glitch.me/api/biblioteca/").pipe(
     map(res => {return res.map(this.converterLivros);
     }));
  }
  obterUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>("https://willergmp.glitch.me/api/biblioteca/user").pipe(
    map(res => {return res.map(this.converterUsuarios);
    }));
  }

  excluirLivro(id:string):Observable <Livro>{
    return this.http.delete<Livro>("https://willergmp.glitch.me/api/biblioteca/"+id)
  }
  excluirUsuario(id:string):Observable <Usuario>{
    return this.http.delete<Usuario>("https://willergmp.glitch.me/biblioteca/user/"+id)
  }
  converterLivros(json_entrada:Livro):Livro{
    console.log(json_entrada)
    
    let livroRetorno : Livro ={
      _id:json_entrada._id,
      isbnLivro:json_entrada.isbnLivro,
      autorLivro:json_entrada.autorLivro,
      tituloLivro:json_entrada.tituloLivro,
      qtdExemplares:json_entrada.qtdExemplares
    } 
    return livroRetorno;
  }
  converterUsuarios(json_entrada:Usuario):Usuario{
    let user : Usuario = {
      _id:json_entrada._id,
      cpf :json_entrada.cpf , 
      nome :json_entrada.nome , 
      email :json_entrada.email , 
      telefone :json_entrada.telefone , 
      qtdLivrosEmprestados :json_entrada.qtdLivrosEmprestados  
    }
    return user;
  }
}
