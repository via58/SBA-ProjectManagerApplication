import { Component, OnInit } from '@angular/core';
import { Userservice } from '../../services/userservice';
import { User } from '../../models/user';
import { AdduserComponent } from '../adduser/adduser.component';
import { Userfilter } from '../../filter/userfilter';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  userContainer: User[];
  updateUser: User = null;
  searchUserName: string;
  sortFirstName: boolean;
  sortLastName: boolean;
  sortAssociateId: boolean;
  constructor(private _userservice: Userservice,
    private _addUserComponent: AdduserComponent) { }

  ngOnInit() {
    this._userservice.getAllUsers()
      .subscribe(
        (servicedata) => {
          this.userContainer = servicedata;
          // console.log(this.userContainer)
        }
      )
  }
  HandleUpdate(editUser: User) {
    this._addUserComponent.newUser = editUser;
    this._addUserComponent.buttonChange();
  }
  HandleDelete(userId: number) {
    this._userservice.DeleteUser(userId)
      .subscribe(
        data => console.log('success !', data),
        error => console.error('Error !', error)
      )
  }
  toggleswitch(value: number) {
    switch (value) {
      case 0:
        this.sortFirstName = true;
        this.sortLastName = false;
        this.sortAssociateId = false;
        break;
      case 1:
      this.sortFirstName = false;
      this.sortLastName = true;
      this.sortAssociateId = false;
        break;
      case 2:
      this.sortFirstName = false;
      this.sortLastName = false;
      this.sortAssociateId = true;
        break;
      default:
        break;
    }
  }
}
