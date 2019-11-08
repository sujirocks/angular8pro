import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  config: any;
  posts: any[];
  loading = true;
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  // tslint:disable-next-line: deprecation
  constructor(private service: PostService, private formBuilder: FormBuilder) {
    /* As the best practice, the constructor should be very small and lightweight.
     So we should not perform the expensive operations like calling the server in constructor */

    // http.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe((response: any) => {
    //   this.posts = response.json();
    //   console.log(this.posts);
    // });
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.posts
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log('Search success !!');
}
  ngOnInit() {
    // this.http.get(this.url).subscribe((response: any) => {
    //   this.posts = response.json();
    //   console.log(this.posts);
    // });


    /*Using Service Seperation of concerns*/
    this.service.getPosts().
    subscribe((response: any) => {
      this.posts = response.json();
      this.loading = false;
      console.log(this.posts);
    });

    this.registerForm = this.formBuilder.group({
      searchName: ['', Validators.required]
  });
  }

}


