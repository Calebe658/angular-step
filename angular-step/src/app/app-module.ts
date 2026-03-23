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
import { MapaComponent } from './componentes/mapa/mapa.component';
import { GoogleMapsModule } from '@angular/google-maps';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    GoogleMapsModule,
    MapaComponent,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
