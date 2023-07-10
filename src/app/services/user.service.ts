import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get(this.baseUrl)
      .pipe(
        map((response: any) =>
          response.map((user: User) => ({ id: user.id, name: user.name }))
        )
      );
  }
}
