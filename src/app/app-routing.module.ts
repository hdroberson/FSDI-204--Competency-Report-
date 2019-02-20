import {MainPageComponent} from './main-page/main-page.component';
import {UserFormComponent} from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';

// here we should register all the valid routes of he system
const routes: Routes = [
// site entry point
{path: '', component: MainPageComponent},

// other paths
  {path: 'user', component: UserFormComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/login', component: LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
