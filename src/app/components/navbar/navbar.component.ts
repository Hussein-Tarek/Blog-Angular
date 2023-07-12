import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoading: boolean = false;
  error: string = '';
  users: User[] = [];
  @Output() usersEvent = new EventEmitter();
  selectedUser: string = 'Select User';
  image =
    'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';
  constructor(
    private UserService: UserService,
    private postService: PostService
  ) {}
  ngOnInit() {
    this.isLoading = true;
    this.UserService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
        this.usersEvent.emit(this.users);
      },
      // error: (error) => {
      //   this.error = 'Unexpected error, please try again later';
      //   this.isLoading = false;
      //   console.log(error, 'from nav');
      // },
    });
  }
  onSelectionChange() {
    this.postService.getPostsById(this.selectedUser);
    console.log(this.selectedUser, 'selected');
  }
}
