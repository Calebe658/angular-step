import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  titulo: string = "Olá, mundo!";
  numero: number = 10;

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
}