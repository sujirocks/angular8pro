import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  posts: any[];
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  // tslint:disable-next-line: deprecation
  constructor(private service: PostService) {
    /* As the best practice, the constructor should be very small and lightweight.
     So we should not perform the expensive operations like calling the server in constructor */

    // http.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe((response: any) => {
    //   this.posts = response.json();
    //   console.log(this.posts);
    // });
  }

  ngOnInit() {
    // this.http.get(this.url).subscribe((response: any) => {
    //   this.posts = response.json();
    //   console.log(this.posts);
    // });


    /*Using Service ( Seperation of concerns )*/
    this.service.getPosts().
    subscribe((response: any) => {
      this.posts = response.json();
      console.log(this.posts);
    });
  }
}


