import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService } from 'src/app/_service/login.service';
import {environment} from 'src/environments/environment';
import '../../../assets/login-animation.js';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    
    email: string;
    password: string;
    mensaje: string;
    error: string;
    
    constructor(
        private router: Router, 
        private loginService: LoginService
        ) { }

    ngOnInit(): void {
    }

    login(): void {
        this.loginService.login(this.email, this.password).subscribe(data =>{
            //sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);
            this.router.navigate(['pages/usuarios']);
        });
    }
    
    ngAfterViewInit(){
        (window as any).initialize();
    }

}
