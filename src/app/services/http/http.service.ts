import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc1MzA1OTM0LCJleHAiOjE2Nzc4OTc5MzR9.P4kj0Q6RkA84tuPW9fpc-v7gUCapQkEWdRxdzf8PDwU';

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.token
    );
    return headers;
  }

  getPosts(): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get('http://localhost:1337/posts', { headers })

  }

  ngOnInit() {}
}
