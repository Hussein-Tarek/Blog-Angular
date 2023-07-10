import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  users: User[] = [];
  selectedItem: string = 'Select User';
  constructor(
    private UserService: UserService,
    private postService: PostService
  ) {}
  ngOnInit() {
    this.UserService.getUsers().subscribe((data) => (this.users = data));
    console.log(this.users);
  }
  onSelectionChange() {
    this.postService.getPostById(this.selectedItem);
    console.log(this.selectedItem);
  }
}
