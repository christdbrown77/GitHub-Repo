import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'the home page';
  name = 'Chris Brown';
  email = 'christdbrown77@gmail.com';
  hobbies = ['Soccer', 'Athletics', 'Golf', 'GAA'];
  showHobbies = false;
  editDetails = false;
  address = {
    street: '94 Castlegrange Park',
    town: 'Strabane',
    county: 'Tyrone'
  };

  showHobbyList() {
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  editUserDetails() {
    if (this.editDetails === true) {
      this.editDetails = false;
    } else {
      this.editDetails = true;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  constructor() {}

  ngOnInit() {
  }

}
