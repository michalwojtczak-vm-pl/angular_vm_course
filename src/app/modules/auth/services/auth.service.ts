import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {CategoryInterface} from "../../category/interfaces/category.interface";
import {AuthInterface} from "../interfaces/auth-interface";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(form: FormGroup) {
    return this.http.post<AuthInterface>('/api/auth/login', form.value);
  }
}

