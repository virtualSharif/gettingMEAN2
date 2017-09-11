import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  public users = [{
    _id: '1',
    firstName: 'sharif',
    lastName: 'malik'
  },
  {
    _id: '2',
    firstName: 'atul',
    lastName: 'ranjan'
  },
  {
    _id: '3',
    firstName: 'nikhil',
    lastName: 'jaunjal'
  }];

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user._id).subscribe(data => {
      this.findAll();
    });
  }

  editUser(user: any) {
    this.router.navigate(['/users/' + user._id + '/edit']);
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

  detailUser(user: any) {
    this.router.navigate(['/users/' + user._id]);
  }
}
