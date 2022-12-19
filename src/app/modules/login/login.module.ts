import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from "./services/login.service";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: []
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
      LoginService
  ]
})
export class LoginModule { }
