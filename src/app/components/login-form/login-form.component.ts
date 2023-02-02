import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private httpService: HttpService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (!this.loginForm.invalid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      this.httpService.postAuth(email!, password!).subscribe((data) => {
        sessionStorage.setItem('jwt', data.jwt);
        this.httpService.currentUser = new User(data.user.username, data.user.email, data.user.role.id);
        this.router.navigate(['/home']);
      });
    }
  }
}
