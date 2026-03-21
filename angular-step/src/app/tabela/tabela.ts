import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../userservice'

export interface PeriodicElement {
  userId: number;
  id: number;
  title: number;
  body: string;
}

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class Tabela implements OnInit {
  users: PeriodicElement[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    return this.userService.getUsers().subscribe((data: PeriodicElement[]) => this.users = data)
  }
}
