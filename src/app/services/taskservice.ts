import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  private _url: string = 'http://localhost:64395/api/Task';
  constructor(private _http: HttpClient) { }
  getAllTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this._url)
  }
  AddTask(newTaskDetails: Task): Observable<Task> {
    try {
      console.log(newTaskDetails);
      return this._http.post<Task>(this._url, newTaskDetails);
    } catch (error) {
      console.error(error);
    }
  }
  UpdateTask(updateTaskDetails: Task): Observable<Task> {
    try {
      return this._http.put<Task>(this._url + '/' + updateTaskDetails.task_id, updateTaskDetails);

    } catch (error) {
      console.error(error);
    }
  }
}
