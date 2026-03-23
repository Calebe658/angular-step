import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

export interface Post {
  userId: number;
  id: number;
  title: number;
  body: string;
}

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})

export class Posts {
  users: Post[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    return this.postService.getUsers().subscribe((data: Post[]) => this.users = data)
  }
}
