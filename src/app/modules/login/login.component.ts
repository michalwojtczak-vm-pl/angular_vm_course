import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-components',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fromLogin!: FormGroup;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.fromLogin = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  login(){
    this.authService.login();
  }

}
