import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
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

  showHobbyList() {
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
