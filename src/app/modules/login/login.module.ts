import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from "./services/login.service";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: []
  }

];

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
      LoginService
  ]
})
export class LoginModule { }
