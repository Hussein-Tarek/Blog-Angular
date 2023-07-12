import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CachingInterceptor } from './interceptors/caching.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    CommentsComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
