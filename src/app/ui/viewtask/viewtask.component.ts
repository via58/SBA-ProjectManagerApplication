import { Component, OnInit, Input } from '@angular/core';
import { Taskservice } from '../../services/taskservice';
import { Task } from '../../models/task';
import { forEach } from '@angular/router/src/utils/collection';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projectservice';
import { Button } from 'protractor';
import { Router } from '@angular/router';
import { AddtaskComponent } from '../addtask/addtask.component';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],

})
export class ViewtaskComponent implements OnInit {
  taskContainer: Task[];
  projectList: Project[];
  tempContainer: Task[] = this.taskContainer;
  searchProjectName: string;
  sortStartDate: boolean = false;
  sortEndDate: boolean = false;
  sortPriority: boolean = false;
  sortCompleted: boolean = false;
  searchModalProject:string;
  constructor(
    private _taskservice: Taskservice,
    private _projectservice: ProjectService,
    private _router: Router,
    private _AddTask:AddtaskComponent
  ) { }

  ngOnInit() {
    this._taskservice.getAllTasks()
      .subscribe(
        (data) => {
          this.taskContainer = data;
        }
      )
    this._projectservice.getAllProjects()
      .subscribe(
        (data) => {
          this.projectList = data;
        }
      )
  }
  ViewTaskFilter(projectDetail: Project) {
    this.searchProjectName = projectDetail.project;
  }
  handleUpdateTask(editTask: Task) {
    this._router.navigate(['updatetask',editTask.task_id]);
  }
  handleEndTask(endTask: Task){
    console.log(endTask)
    endTask.status='Completed';
    this._taskservice.UpdateTask(endTask)
    .subscribe(
      data=>console.log("Success !",data),
      error=>console.error('Error !',error)
    )
    window.location.reload();
  }
  toggleswitch(value: number) {
    switch (value) {
      case 0:
        this.sortStartDate = true;
        this.sortEndDate = false;
        this.sortPriority = false;
        this.sortCompleted = false;
        break;
      case 1:
        this.sortStartDate = false;
        this.sortEndDate = true;
        this.sortPriority = false;
        this.sortCompleted = false;
        break;
      case 2:
        this.sortStartDate = false;
        this.sortEndDate = false;
        this.sortPriority = true;
        this.sortCompleted = false;
        break;
      case 3:
        this.sortStartDate = false;
        this.sortEndDate = false;
        this.sortPriority = false;
        this.sortCompleted = true;
        break;
      default:
        break;
    }
  }


}
