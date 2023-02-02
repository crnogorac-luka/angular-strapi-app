import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SinglePost } from 'src/app/models/SinglePost';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  constructor(private httpService: HttpService) {}

  newPostForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', Validators.required)
  });
  content = '<p>Unesite tekst.</p>';
  fileControl = new FormControl();
  selectedFile: any;
  formData = new FormData();

  uploadFile(event: any) {
    this.selectedFile = event.target.files[0];
    this.formData.append('file', this.selectedFile, this.selectedFile.name);
  }

  savePost() {
    const title = this.newPostForm.get('title')!.value;
      const category = this.newPostForm.get('category')!.value;
    const newPost = new SinglePost(title!, category!, this.httpService.currentUser, this.content, null, null, false)
    this.httpService.postPost(newPost).subscribe((data) => {
      console.log(data);
    })
  }
}
