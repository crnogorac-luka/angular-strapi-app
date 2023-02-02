import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  loginForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', Validators.required)
  });
  content = '<p>Unesite tekst.</p>';
  fileControl = new FormControl();


  uploadFile(event) {
    const file = event.target.files[0];

  }

  savePost() {

  }
}
