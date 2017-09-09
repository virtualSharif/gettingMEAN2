import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  private users;

  constructor() {
    this.users = [
      {
        firstName: 'Sharif',
        lastName: 'Malik'
      },
      {
        firstName: 'Atul',
        lastName: 'Ranjan'
      },
      {
        firstName: 'Ravi',
        lastName: 'Gupta'
      }
    ];
  }

  public findAll() {
    return Observable.of(this.users);
  }
}
