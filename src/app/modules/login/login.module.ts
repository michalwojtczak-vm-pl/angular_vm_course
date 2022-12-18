import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./services/auth.service";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthService
    ]
})
export class LoginModule {
}
