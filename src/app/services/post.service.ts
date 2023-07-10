import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = `https://jsonplaceholder.typicode.com/posts?userId=`;

  private postsSubject: Subject<any> = new Subject<any>();
  posts$ = this.postsSubject.asObservable();
  constructor(private http: HttpClient) {}

  getPostById(postId: string) {
    this.http
      .get<Post[]>(`${this.baseUrl}${postId}`)
      .subscribe((posts: Post[]) => {
        this.postsSubject.next(posts);
      });
  }
}
