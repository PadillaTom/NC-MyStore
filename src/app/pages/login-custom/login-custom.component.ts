import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login-custom.service';

@Component({
  selector: 'app-login-custom',
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.scss'],
})
export class LoginCustomComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  login(): void {
    this.loginService.login(this.email, this.password).subscribe((data) => {
      this.router.navigate(['pages/usuarios']);
    });
  }
}
