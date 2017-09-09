import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstname: string = '';
  lastname: string = '';
  jsonData: any;

  save() {
    let data = {
      'firstName': this.firstname,
      'lastName': this.lastname
    }
    this.jsonData = data;
    //do service call
  }

  clear() {
    this.firstname = '';
    this.lastname = '';
  }

}
