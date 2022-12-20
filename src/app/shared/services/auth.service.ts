import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token!: string;

    constructor(
        private http: HttpClient
    ) {
    }

    login(form: FormGroup) {
        return new Promise((resolve) => {
            this.http.post('/api/auth/login', form.value).subscribe((result: any) => {
                this.saveToken(result.token);

                return resolve(true);
            })
        })
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
        this.token = token;
    }

    removeToken() {
        localStorage.removeItem('token');
        // @ts-ignore
        this.token = null;
    }

    isLogged(): boolean {
        return !!this.token ||  !!localStorage.getItem('token');
    }
}