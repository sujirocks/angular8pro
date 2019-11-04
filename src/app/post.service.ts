import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }
  getPosts() {
    return this.http.get(this.url);
  }
}
