import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule}from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddprojectComponent } from './ui/addproject/addproject.component';
import { AddtaskComponent } from './ui/addtask/addtask.component';
import { AdduserComponent } from './ui/adduser/adduser.component';
import { ViewtaskComponent } from './ui/viewtask/viewtask.component';
import { ViewprojectComponent } from './ui/viewproject/viewproject.component';
import { ViewusersComponent } from './ui/viewusers/viewusers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddprojectComponent,
    AddtaskComponent,
    AdduserComponent,
    ViewtaskComponent,
    ViewprojectComponent,
    ViewusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
