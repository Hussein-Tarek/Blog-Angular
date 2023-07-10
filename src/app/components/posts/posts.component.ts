import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.postService.posts$.subscribe((data: any) => {
      this.posts = data;
      console.log(data);
    });
  }
}
