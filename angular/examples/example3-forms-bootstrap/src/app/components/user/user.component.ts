import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public firstName: string;
  public lastName: string;

  constructor() { }

  ngOnInit() {
  }

  add() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    console.log(data);
  }

  clear() {
    this.firstName = '';
    this.lastName = '';
  }
}
