import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;

  constructor() {}

  switchForm() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit() {
    this.isLogin = true;

  }
}
