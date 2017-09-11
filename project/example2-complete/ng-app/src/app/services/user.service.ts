import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {

  private basePath: string = '/api/users';

  constructor(private http: Http) {
  }

  public findAll() {
    return this.http.get(this.basePath).map(res => res.json());
  }

  public findOne(id: any) {
    return this.http.get(this.basePath + '/' + id).map(res => res.json());
  }

  public save(data: any) {
    return this.http.post(this.basePath, data).map(res => res.json());
  }

  public update(id: any, data: any) {
    return this.http.put(this.basePath + '/' + id, data).map(res => res.json());
  }

  public deleteUser(id: any) {
    console.log('delete + ' + id);
    return this.http.delete('http://localhost:19991/api/users/' + id);
  }
}
