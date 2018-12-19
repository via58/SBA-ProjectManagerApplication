import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { url } from 'inspector';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _url: string = 'http://localhost/ProjectManagerService/api/project';
  // private _url: string = 'http://localhost:64395/api/project';
  constructor(private _http: HttpClient) { }
  getAllProjects():Observable<Project[]> {
    return this._http.get<Project[]>(this._url)
  }
  AddProject(newProjectDetails: Project): Observable<Project> {
    try {
      return this._http.post<Project>(this._url, newProjectDetails, httpOptions);
    } catch (error) {
      console.error(error);
    }
  }
  UpdateProject(projectDetails: Project): Observable<Project> {
    try {
      return this._http.put<Project>(this._url+'/'+projectDetails.project_id, projectDetails,httpOptions);
    } catch (error) {
      console.error(error);
    }
  }
}