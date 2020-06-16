import { Component, OnInit } from '@angular/core';
import { Users } from '@/models/users';
import { IUser, IUsersResponse } from '@/interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public loading = false;
  public dialog = false;
  public users: IUser[] = [];
  constructor() {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.loading = true;
    const resp: IUsersResponse = await Users.find();
    this.users = resp.data;
    this.loading = false;
  }
}
