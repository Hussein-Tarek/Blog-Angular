import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ImageService } from 'src/app/services/image.service';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() users: User[] = [];
  posts: Post[] = [];
  isLoading: boolean = false;
  error: string = '';
  images: string[] = [
    'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1549556289-9706946b9c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://plus.unsplash.com/premium_photo-1675448891093-33365fb83a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1546872863-e85d5c3e5159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1518413380322-fc82a14756f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://media.istockphoto.com/id/1366361196/photo/the-mystical-landscape-of-the-khu-dynasty-grasslands-xinjiang-china.webp?s=170667a&w=0&k=20&c=6Hy_xPz55k9YGIkdC4bEoKUoxdJPJLkLyMWho3wLeQw=',
    'https://images.unsplash.com/photo-1530518854704-23de978d2915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1515984977862-1c7201ef324d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
  ];
  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  constructor(
    private postService: PostService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.postService.posts$.subscribe((response: any) => {
      this.isLoading = response.loading;
      this.posts = response.posts;
      this.error = response.error;
    });
    this.imageService.dataSubject.subscribe((data) => (this.images = data));
  }
}
