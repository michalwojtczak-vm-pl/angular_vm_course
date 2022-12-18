import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {AuthInterface} from "../../interfaces/auth-interface";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  formLogin!: FormGroup;
  user! : AuthInterface;

  constructor(
      private router: Router,
      private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log("Zainicjalizowano formularz")

  }

  initForm() {
    this.formLogin = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    })
  }

  login() {
    if (!this.formLogin.valid) {
      return;
    }

    this.authService.login(this.formLogin).subscribe((result) => {
      this.authService.login(this.formLogin.value);
      this.user = result;
      this.authService.userLogin = result;
      //this.router.navigateByUrl('/auth/login/success');
    })

  }

}
