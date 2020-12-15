import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    user: any;
    profileJson: string = null;

    constructor(private router: Router,
                public auth: AuthService) {
    }

    ngOnInit() {
        this.getUserInfo();
    }

    goToHome() {
        this.router.navigateByUrl('/home')
    }

    getUserInfo() {
        this.auth.user$.subscribe((profile) => {
                localStorage.setItem('userinfo', JSON.stringify(profile));
                this.user = profile;
                console.log(profile)
            }
        );
        console.log(this.profileJson)
    }


}
