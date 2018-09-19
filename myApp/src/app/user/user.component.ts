import { PostserviceService } from './../postservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [PostserviceService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'Chris Brown';
  email = 'christdbrown77@gmail.com';
  hobbies = ['Soccer', 'Athletics', 'Golf', 'GAA'];
  showHobbies = false;
  address = {
    street: '94 Castlegrange Park',
    town: 'Strabane',
    county: 'Tyrone'
  };
  posts = [];

  showHobbyList() {
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  constructor(private postservice: PostserviceService) {

    this.postservice.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });

  }

  ngOnInit() {
  }

}
