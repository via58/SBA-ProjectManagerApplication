import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectComponent } from 'src/app/ui/addproject/addproject.component';
import { AddtaskComponent } from 'src/app/ui/addtask/addtask.component';
import { AdduserComponent } from 'src/app/ui/adduser/adduser.component';
import { ViewtaskComponent } from 'src/app/ui/viewtask/viewtask.component';
import { UpdatetaskComponent } from './ui/updatetask/updatetask.component';

const routes: Routes = [
  { path: 'addproject', component: AddprojectComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'updatetask/:id', component: UpdatetaskComponent },
  { path: '', component: ViewtaskComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// // export const RoutingComponents=[AddprojectComponent,AddtaskComponent,
//   AdduserComponent,ViewtaskComponent];
