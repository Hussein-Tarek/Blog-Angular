import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: { [url: string]: any } = {};

  getFromCache(url: string): any {
    return this.cache[url]?.body;
  }

  setInCache(url: string, data: any): void {
    this.cache[url] = data;
  }
}
