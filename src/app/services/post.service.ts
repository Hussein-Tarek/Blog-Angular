import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = `https://jsonplaceholder.typicode.com/posts?userId=`;

  private dataSubject: Subject<any> = new Subject<any>();
  posts$ = this.dataSubject.asObservable();
  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getPostsById(userId: string) {
    // get the data from the cache
    const cachedData = this.cacheService.getFromCache(
      `${this.baseUrl}${userId}`
    );
    // if the data already cached get it from the cache else get it from the API
    if (cachedData) {
      this.dataSubject.next({ posts: cachedData, loading: false });
    } else {
      this.dataSubject.next({ loading: true });
      this.http.get<Post[]>(`${this.baseUrl}${userId}`).subscribe({
        next: (posts: Post[]) => {
          this.dataSubject.next({ posts: posts, loading: false });
        },
        error: (error) =>
          this.dataSubject.next({ loading: false, error: error }),
      });
    }
  }
}
