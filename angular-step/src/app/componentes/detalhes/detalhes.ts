import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: false,
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {
  public idPost: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      this.idPost = id;
    });
  }
}
