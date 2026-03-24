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
  posts: any[] = [];

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe(
      (response: any) => {
        this.posts = response
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}