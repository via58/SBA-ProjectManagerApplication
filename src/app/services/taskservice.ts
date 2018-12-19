import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
//import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  private _url: string = 'http://localhost/ProjectManagerService/api/Task';
  // private _url: string = 'http://localhost:64395/api/Task';
  constructor(private _http: HttpClient) { }
  getAllTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this._url)
  }
  AddTask(newTaskDetails: Task): Observable<Task> {
    try {
      console.log(newTaskDetails);
      return this._http.post<Task>(this._url, newTaskDetails,httpOptions);
    } catch (error) {
      console.error(error);
    }
  }
  UpdateTask(updateTaskDetails: Task): Observable<Task> {
    try {
      return this._http.put<Task>(this._url + '/' + updateTaskDetails.task_id, updateTaskDetails,httpOptions);

    } catch (error) {
      console.error(error);
    }
  }
}
