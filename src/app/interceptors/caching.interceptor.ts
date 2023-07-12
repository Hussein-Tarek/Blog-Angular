import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Check if the request method is GET
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    // Check if the response is already in the cache
    // const cachedResponse = this.cacheService.getFromCache(req.url);

    // if (cachedResponse) {
    //   console.log('cached', cachedResponse);
    //   return of(cachedResponse);
    // }

    // If not in cache, make the API call and cache the response
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('caching', event);
          this.cacheService.setInCache(req.url, event);
        }
      })
    );
  }
}
