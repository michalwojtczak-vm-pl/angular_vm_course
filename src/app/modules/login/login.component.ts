import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInterface} from "./interfaces/user.interface";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
      protected loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.loginService.login(this.loginForm);
  }

  logout() {
    this.loginService.logout();
  }

  getLoggedUser() {
    this.loginService.loggedUser;
  }
}
