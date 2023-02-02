import { Component, Input } from '@angular/core';
import { SinglePost } from 'src/app/models/SinglePost';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
@Input() singlePostObject: SinglePost | any;
author: User | any;

ngOnInit() {
  this.author = this.singlePostObject.author;
}

}
