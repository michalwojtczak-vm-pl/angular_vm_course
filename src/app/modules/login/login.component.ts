import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./services/login.service";
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
      protected loginService: LoginService,
      private authService: AuthService,
      private router: Router,
      private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    this.authService.login(this.loginForm).then(() => {
      this.toastr.success('Super!', 'Zalogowany poprawnie');
      this.router.navigateByUrl('/categories');
    });

  }

  logout() {

  }

}
