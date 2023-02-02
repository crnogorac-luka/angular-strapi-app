import { Component } from '@angular/core';
import { SingleMedia } from 'src/app/models/SingleMedia';
import { SinglePost } from 'src/app/models/SinglePost';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  allPosts: SinglePost[] = [];

  getAllPosts() {
    this.httpService.getPosts().subscribe((data) => {
      let singlePostArray: SinglePost[];
      singlePostArray = data.map((post: any) => {
        let author = null;
        if (post.author) {
          author = new User(
            post.author.username,
            post.author.email,
            post.author.role
          );
        }
          let coverPhoto = null;
          if (post.coverPhoto) {
            coverPhoto = new SingleMedia(
              post.coverPhoto.ext,
              post.coverPhoto.name,
              post.coverPhoto.url
            );
          }

        return new SinglePost(
          post.title,
          post.category,
          author,
          post.content,
          coverPhoto,
          null
        );
      });
      this.allPosts = singlePostArray;
    });
  }

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAllPosts();
  }
}
