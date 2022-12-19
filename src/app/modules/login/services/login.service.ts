import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interfaces/user.interface";
import {FormGroup} from "@angular/forms";

@Injectable()
export class LoginService {
    private _loggedUser: UserInterface|undefined;

    constructor(
        private http: HttpClient
    ) {
    }

    login(form: FormGroup) {
        this.http.post<UserInterface>(`/api/auth/login`, form.value).subscribe((user) => {
            this._loggedUser = user;
        });
    }

    get loggedUser(): UserInterface | undefined {
        return this._loggedUser;
    }

    logout() {
         delete this._loggedUser;
    }
}
