import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Exemplo1 } from './exemplo1/exemplo1';
import { FormsModule } from '@angular/forms';
import { Exemplo2 } from './exemplo2/exemplo2';
import { Exemplo3 } from './exemplo3/exemplo3';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Rotas } from './componentes/rotas/rotas';
import { PainelAdm } from './componentes/painel-adm/painel-adm';
import { Frete } from './componentes/frete/frete';
import { MatTableModule } from '@angular/material/table';
import { Posts } from './posts/posts';
import { Tabela } from './tabela/tabela';
import { GoogleMapsModule } from '@angular/google-maps';
import { Detalhes } from './componentes/detalhes/detalhes';
import { Admin } from './admin/admin';
import { Usuarios } from './usuarios/usuarios';
import { Configuracoes } from './configuracoes/configuracoes';

@NgModule({
  declarations: [
    App,
    Exemplo1,
    Exemplo2,
    Exemplo3,
    Dashboard,
    Rotas,
    PainelAdm,
    Frete,
    Posts,
    Tabela,
    Detalhes,
    Admin,
    Usuarios,
    Configuracoes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    GoogleMapsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
