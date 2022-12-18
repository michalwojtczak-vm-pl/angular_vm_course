import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CategoryService} from "../category/services/category.service";
import {CategorySubsService} from "../category/services/category-subs.service";
import {AuthService} from "./services/auth.service";
import { AuthLoginWelcomeComponent } from './components/auth-login/auth-login-welcome/auth-login-welcome.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: AuthLoginComponent,
        children: [
          {
            path: 'success',
            component: AuthLoginWelcomeComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthLoginWelcomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
