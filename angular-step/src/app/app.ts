import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  titulo: string = "Olá, mundo!";
  numero: number = 10;

  constructor(private router: Router) { }

  arrowFunction = (parametro: string) => {
    return parametro;
  }

  funcao(params: string) {
    return params;
  }

  numero1: number = 1523;
  data: string = "2024-07-08";
  valorMercadoria: number = 180.25;
  palavra: string = "Olá!";

  irParaFrete() {
    this.router.navigate(['/frete'], { queryParams: { categoria: 'teclados', precoMax: 500 } });
  }

  irParaPainel() {
    this.router.navigate(['/painel-adm'], { state: { usuario: 'Carlos', nivel: 'admin' } });
  }
}