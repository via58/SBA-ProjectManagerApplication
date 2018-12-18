import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Userservice } from '../../services/userservice';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  newUser = new User();
  updateUserDetails: User = null;
  constructor(private _userService: Userservice) { }

  ngOnInit() {
  }
  AddUser() {
    console.log(this.newUser)
    this._userService.AddNewUser(this.newUser)
      .subscribe(
        data => console.log('success !', data),
        error => console.error('error !', error)
      )
  }
  UpdateUser() {
    try {
      this._userService.UpdateUser(this.newUser)
        .subscribe(
          data => console.log('success !', data),
          error => console.error('error !', error)
        )
    } catch (error) {
      error => console.error('error !', error)
    }

    let update = document.getElementById('btnupdate') as HTMLElement;
    update.style.display = 'none';
    let add = document.getElementById('btnadd') as HTMLElement;
    add.style.display = 'inline';
  }
  buttonChange() {
    let element = document.getElementById('btnadd') as HTMLElement;
    element.style.display = 'none';
    let update = document.getElementById('btnupdate') as HTMLElement;
    update.style.display = 'inline';
  }

}
