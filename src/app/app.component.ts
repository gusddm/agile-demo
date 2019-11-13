import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AgileEngine Notebook demo';
  users: User[] = [];

  constructor(
    protected txService: UserService
  ) {
  }

  ngOnInit() {    
    this.txService.getUsers()
    .subscribe(
      data => { // Success
        //console.log(data);
        this.users = data as User[];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}