import { Component, OnInit } from '@angular/core';
import { PostserviceService } from './../postservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  providers: [PostserviceService],
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  posts = [];

  constructor(private postservice: PostserviceService) {

    this.postservice.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });

  }

  ngOnInit() {
  }

}
