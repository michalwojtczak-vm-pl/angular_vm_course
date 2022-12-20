import { NgModule } from '@angular/core';
import {LoginService} from "./services/login.service";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import { SharedModule } from '../../shared/shared.module';

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
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
      LoginService
  ]
})
export class LoginModule { }
