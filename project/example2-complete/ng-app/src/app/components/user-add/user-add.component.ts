import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {

  public firstName: string;
  public lastName: string;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  add() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.userService.save(data).subscribe(data => {
      //navigate to detail view
      this.router.navigate(['/users/' + data._id]);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
