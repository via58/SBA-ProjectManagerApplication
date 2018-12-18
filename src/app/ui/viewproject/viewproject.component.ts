import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projectservice';
import { Project } from '../../models/project';
import { Projectdropdown } from '../../models/projectdropdown';
import { AddprojectComponent } from '../addproject/addproject.component';
import { Projectfilter } from '../../filter/projectfilter';
import { Projectsort } from '../../filter/projectsort';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {
  projectContainer: Project[];
  projectList: Projectdropdown[];
  searchProjectName: string;
  sortStartDate: boolean=false;
  sortEndDate: boolean=false;
  sortPriority: boolean;
  sortCompleted: boolean;
  tempContainer:Project;
  constructor(
    private _project: ProjectService,
    private _addProjectComponent: AddprojectComponent) { }

  ngOnInit() {
    this._project.getAllProjects().subscribe(
      (data) => {
      this.projectContainer = data
      console.log(this.projectContainer);
      }
    )
  }
  HandleUpdate(editProject: Project) {
    this.tempContainer=editProject;
    this._addProjectComponent.newProject = this.tempContainer;
    this._addProjectComponent.buttonChange();
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
