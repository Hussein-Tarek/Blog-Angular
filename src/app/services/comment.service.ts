import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../interfaces/comment.interface';
import { CacheService } from './cache.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private http: HttpClient, private cacheService: CacheService) {}
  getComments(postId: number) {
    const cachedData = this.cacheService.getFromCache(
      `${this.baseUrl}${postId}`
    );
    if (cachedData) {
      return of(cachedData);
    } else {
      return this.http.get<Comment[]>(`${this.baseUrl}${postId}`);
    }
  }
}
