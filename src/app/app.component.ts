import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  error: any;
  constructor() {}

  title = 'Blog-Angular';
  users: User[] = [];
  receiveUsers(users: User[]) {
    this.users = users;
  }
}
