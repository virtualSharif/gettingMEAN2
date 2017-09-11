import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  public _id: string;
  public firstName: string;
  public lastName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    //fetch id from url
    this.route.params.subscribe(params => {
      this._id = params['userId'];

      //fetch user detail from rest api
      this.userService.findOne(this._id).subscribe(data => {
        console.log(data);
        this.firstName = data[0].firstName;
        this.lastName = data[0].lastName;
      });
    });
  }

  deleteUser() {
    this.userService.deleteUser(this._id).subscribe(data => {
      this.back();
    });
  }

  editUser() {
    this.router.navigate(['/users/' + this._id + '/edit']);
  }

  back() {
    this.router.navigate(['/users']);
  }


}
