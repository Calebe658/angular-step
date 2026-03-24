import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Post {
  userId: number;
  id: number;
  title: number;
  body: string;
}

@Component({
  selector: 'tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
  @Input() data: Post[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  getDetalhes(id: any) {
    this.router.navigate(['/detalhes', id])
  }
}
