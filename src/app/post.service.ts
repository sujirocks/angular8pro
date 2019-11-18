import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // tslint:disable-next-line: deprecation
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }
}
