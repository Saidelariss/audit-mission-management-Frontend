import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseFrameworksComponent} from "./choose-frameworks/choose-frameworks.component"
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {path:"chooseFrameworks",component : ChooseFrameworksComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"createUser",component:CreateUserComponent},
  {path:"createProject",component:CreateProjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
