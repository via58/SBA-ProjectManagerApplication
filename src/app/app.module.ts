import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddprojectComponent } from './ui/addproject/addproject.component';
import { AddtaskComponent } from './ui/addtask/addtask.component';
import { AdduserComponent } from './ui/adduser/adduser.component';
import { ViewtaskComponent } from './ui/viewtask/viewtask.component';
import { ViewprojectComponent } from './ui/viewproject/viewproject.component';
import { ViewusersComponent } from './ui/viewusers/viewusers.component';
import { pipe } from 'rxjs';

import {Userfilter} from './filter/userfilter';
import { Usersort } from './filter/usersort';
import { Projectfilter } from './filter/projectfilter';
import { Projectsort } from './filter/projectsort';
import { Tasksort } from './filter/tasksort';
import { UpdatetaskComponent } from './ui/updatetask/updatetask.component';

@NgModule({
  declarations: [
    AppComponent,
    AddprojectComponent,
    AddtaskComponent,
    AdduserComponent,
    ViewtaskComponent,
    ViewprojectComponent,
    ViewusersComponent,
    Userfilter,
    Usersort,
    Projectfilter,
    Projectsort,
    Tasksort,
    UpdatetaskComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ViewprojectComponent,AddtaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
