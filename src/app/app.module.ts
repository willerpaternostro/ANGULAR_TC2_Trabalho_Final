import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { LivrosComponent } from './livros/livros.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ExibirISBNPipe } from './exibir-isbn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LivrosComponent,
    CadastroComponent,
    EditarComponent,
    CadastroUsuarioComponent,
    EditarUsuarioComponent,
    ExibirISBNPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
