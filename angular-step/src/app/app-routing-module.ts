import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exemplo1 } from './exemplo1/exemplo1';
import { Dashboard } from "./componentes/dashboard/dashboard";
import { Rotas } from "./componentes/rotas/rotas";
import { PainelAdm } from "./componentes/painel-adm/painel-adm";
import { Frete } from "./componentes/frete/frete";
import { Posts } from './posts/posts';
import { MapaComponent } from './componentes/mapa/mapa.component';

const routes: Routes = [
  { path: 'exemplo1', component: Exemplo1 },
  { path: 'dashboard', component: Dashboard },
  { path: 'rotas', component: Rotas },
  { path: 'painel-adm', component: PainelAdm },
  { path: 'frete', component: Frete },
  { path: 'posts', component: Posts },
  { path: 'mapa', component: MapaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }