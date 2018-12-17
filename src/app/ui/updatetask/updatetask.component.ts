import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task';
import { Taskservice } from '../../services/taskservice';
import { Userservice } from '../../services/userservice';
import { User } from '../../models/user';
import { Parent } from '../../models/parent';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  taskId: number;
  parentTask: Parent[];
  updateTask: Task = new Task();
  check: boolean = false;
  users: User[];
  taskContainer: Task[];
  isChecked:boolean;
  constructor(
    private _route: ActivatedRoute,
    private _taskservice: Taskservice,
    private _userservice: Userservice,
    private _router: Router

  ) { }

  ngOnInit() {
    this.taskId = +(this._route.snapshot.paramMap.get('id'));
    console.log(this.taskId)
    this.getUsersNames();
    this.getParentTaskNames();
    this._taskservice.getAllTasks()
      .subscribe(
        (data) => {
          this.taskContainer = data.filter(
            task => { return task.task_id == this.taskId },
          );
          this.updateTask = this.taskContainer[0];
        }
      )
    console.log(this.updateTask);
  }
  getUsersNames() {
    this._userservice.getAllUsers()
      .subscribe(
        (data) => {
          this.users = data;
        }
      )
  }
  getParentTaskNames() {
    this._userservice.getAllParentTasks()
      .subscribe(
        data => {
          this.parentTask = data
        })
  }
  handleParentInput(name: any) {
    this.updateTask.parent_task = name.parent_task;
    this.updateTask.parent_id = name.parent_id;
  }
  handleUserInput(name: any) {
    this.updateTask.firstName = name.firstName;
    this.updateTask.status = "In Progress";
    console.log(name);
  }
  isReadOnly(isChecked: boolean) {
    this.check = isChecked;
    if (this.check == false) {
      this.updateTask.parent_id = 0;
      this.updateTask.parent_task = "No Parent Task";
    }
  }
  submitUpdateTask() {
    try {
      this._taskservice.UpdateTask(this.updateTask)
      .subscribe(
        data => { console.log('success !', data) },
        error => console.error('error !', error)
      )
      console.log(this.updateTask)
    } catch (error) {
      console.error(error);
    }
     this._router.navigate(['viewtask']);
     window.location.reload();
  }

}
