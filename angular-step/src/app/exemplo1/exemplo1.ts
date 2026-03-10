import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  standalone: false,
  templateUrl: './exemplo1.html',
  styleUrl: './exemplo1.css',
})
export class Exemplo1 {
  lista: number[] = [
    100, 200, 300, 400, 500, 600, 700
  ];

  isActive: boolean = true;

  trocarCor(): boolean {
    return this.isActive = !this.isActive
  }
}
