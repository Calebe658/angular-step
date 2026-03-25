import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frete',
  standalone: false,
  templateUrl: './frete.html',
  styleUrl: './frete.css',
})
export class Frete {
  categoria: any;
  precoMax: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.categoria = params.get('categoria');
      this.precoMax = params.get('precoMax');
    });
  }
}
