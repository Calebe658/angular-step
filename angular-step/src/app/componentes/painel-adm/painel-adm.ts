import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-painel-adm',
  standalone: false,
  templateUrl: './painel-adm.html',
  styleUrl: './painel-adm.css',
})
export class PainelAdm {

  ngOnInit() {
    const usuario = history.state.usuario;
    const nivel = history.state.nivel;
    console.log(usuario, nivel);
  }
}
