import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo2',
  standalone: false,
  templateUrl: './exemplo2.html',
  styleUrl: './exemplo2.css',
})
export class Exemplo2 {
  today = new Date();

  amount = 1234.56;

  text = 'hello angular';

  username = "";
}
