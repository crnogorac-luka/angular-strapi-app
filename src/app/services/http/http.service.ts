import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  token = sessionStorage?.getItem('jwt');
  API_BASE_URL = "http://localhost:1337";

  constructor(private http: HttpClient) {}

  postAuth(identifier: string, password: string): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/auth/local`, {
      "identifier": identifier,
      "password": password
    })
  }

  postPost()

  getPosts(): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get(`${this.API_BASE_URL}/posts`, { headers })

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.token
    );
    return headers;
  }

  ngOnInit() {}
}
