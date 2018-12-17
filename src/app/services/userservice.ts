import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Parent } from '../models/parent';
//import 'rxjs/add/operator/map';
@Injectable({
    providedIn: 'root'
})
export class Userservice {
    private _UserUrl: string = 'http://localhost:64395/api/Users';
    private _parentUrl: string = 'http://localhost:64395/api/Parent';
    constructor(private _http: HttpClient) { }
    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>(this._UserUrl)
    }
    getAllParentTasks(): Observable<Parent[]> {
        return this._http.get<Parent[]>(this._parentUrl);
    }
    AddNewUser(userDetails: User): Observable<User> {
        return this._http.post<User>(this._UserUrl, userDetails);
    }
    UpdateUser(userDetails: User): Observable<User> {
        return this._http.put<User>(this._UserUrl + '/' + userDetails.user_ID, userDetails);
    }
    DeleteUser(userId: number): Observable<User> {
        return this._http.delete<User>(this._UserUrl + '/' + userId);
    }
}
