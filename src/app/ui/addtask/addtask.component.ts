import { Component, OnInit } from '@angular/core';
import { Taskservice } from '../../services/taskservice';
import { Task } from '../../models/task';
import { Projectdropdown } from '../../models/projectdropdown';
import { ProjectService } from '../../services/projectservice';
import { Project } from '../../models/project';
import { Dropdown } from '../../services/dropdown';
import { User } from '../../models/user';
import { Userservice } from '../../services/userservice';
import { Parent } from '../../models/parent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  tasks = new Task();
  parentTask: Parent[];
  projectList: Array<Projectdropdown>;
  project: Projectdropdown = new Projectdropdown();
  check: boolean = false;
  users: User[];
  isChecked:boolean;
  searchModalProject:string;
  constructor(
    private _taskservice: Taskservice,
    private _projectservice: ProjectService,
    private _userservice: Userservice,
    private _router: Router
  ) { }

  ngOnInit() {
    this.projectList = new Array();
    // this.project = new Projectdropdown();
    this.getAllProjectNames();
    this.getUsersNames();
    this.getParentTaskNames();
    this.tasks.parent_id = 0;
    this.tasks.parent_task = "No Parent Task";
  }
  getParentTaskNames() {
    this._userservice.getAllParentTasks()
      .subscribe(
        data => {
          this.parentTask = data
          // console.log(this.parentTask);
        })
  }
  getUsersNames() {
    this._userservice.getAllUsers()
      .subscribe(
        (data) => {
          this.users = data;
        }
      )
  }
  getAllProjectNames() {
    this._projectservice.getAllProjects().subscribe(
      data => {
        data.forEach(element => {
          this.project.project = element.project;
          this.project.project_id = element.project_id;
          this.projectList.push(this.project);
          this.project = new Projectdropdown();
        });
      })
  }
  submitTask() {
    this._taskservice.AddTask(this.tasks)
      .subscribe(
        data => console.log('success !', data),
        error => console.error('error !', error)
      )
    this._router.navigate(['viewtask']);
  }
  handleProjectInput(name: any) {
    this.tasks.project_id = name.project_id;
    this.tasks.project = name.project;
    console.log(name)
  }
  handleParentInput(name: any) {
    this.tasks.parent_task = name.parent_task;
    this.tasks.parent_id = name.parent_id;
  }
  handleUserInput(name: any) {
    this.tasks.firstName = name.firstName;
    this.tasks.status = "In Progress";
    console.log(name);
  }
  isReadOnly(isChecked: boolean) {
    this.check = isChecked;
    if (this.check == false) {
      this.tasks.parent_id = 0;
      this.tasks.parent_task = "No Parent Task";
    }
  }

}
