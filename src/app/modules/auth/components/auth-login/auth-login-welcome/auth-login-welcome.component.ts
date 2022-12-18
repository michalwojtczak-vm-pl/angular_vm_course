import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CategoryInterface} from "../../../../category/interfaces/category.interface";
import {AuthInterface} from "../../../interfaces/auth-interface";

@Component({
  selector: 'app-auth-login-welcome',
  templateUrl: './auth-login-welcome.component.html',
  styleUrls: ['./auth-login-welcome.component.scss']
})
export class AuthLoginWelcomeComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  get userLogin(): AuthInterface {
    return this.authService.userLogin;
  }
}
