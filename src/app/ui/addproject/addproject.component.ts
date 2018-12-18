import { Component, OnInit } from '@angular/core';
import { Userservice } from '../../services/userservice';
import { User } from '../../models/user';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projectservice';
import { ViewprojectComponent } from '../viewproject/viewproject.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  users: User[];
  newProject: Project = new Project;
  check: boolean = false;
  successmodal: boolean = false;
  isChecked:boolean;
  constructor(
    private _userservice: Userservice,
    private _projectservice: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userservice.getAllUsers()
      .subscribe(
        (data) => {
          this.users = data;
        }
      )
  }
  handleBox(name: string) {
    this.newProject.firstName = name;
  }
  isReadOnly(isChecked: boolean) {
    this.check = isChecked;
    this.successmodal = isChecked;
  }
  handlesubmit() {
    console.log(this.newProject);
    this._projectservice.AddProject(this.newProject)
      .subscribe(
        data => { console.log('success !', data) },
        error => console.error('error !', error)
      )
    this._router.navigate(['addproject']);
    window.location.reload();
  }
  HandleUpdate() {
    try {
      this._projectservice.UpdateProject(this.newProject)
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
    window.location.reload();
  }
  buttonChange() {
    let element = document.getElementById('btnadd') as HTMLElement;
    element.style.display = 'none';
    let update = document.getElementById('btnupdate') as HTMLElement;
    update.style.display = 'inline';
  }

}
