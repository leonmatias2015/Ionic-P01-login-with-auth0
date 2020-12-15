import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import validate = WebAssembly.validate;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(public auth: AuthService) {
    }

    ngOnInit() {
    }

    login() {
        this.auth.loginWithRedirect();

    }
}
