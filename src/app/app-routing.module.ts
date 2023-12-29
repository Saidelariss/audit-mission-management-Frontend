import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChooseFrameworksComponent} from "./choose-frameworks/choose-frameworks.component"
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"chooseFrameworks",component : ChooseFrameworksComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
