import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterCustomService } from 'src/app/_service/register-custom.service';

@Component({
  selector: 'app-register-custom',
  templateUrl: './register-custom.component.html',
  styleUrls: ['./register-custom.component.scss'],
})
export class RegisterCustomComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  country: string;
  state: string;
  city: string;
  imageProfile: string;

  constructor(
    private router: Router,
    private registerService: RegisterCustomService
  ) {}

  ngOnInit(): void {}

  register(): void {
    this.registerService
      .register(
        this.username,
        this.email,
        this.password,
        this.name,
        this.surname,
        this.country,
        this.state,
        this.city,
        this.imageProfile
      )
      .subscribe((data) => {
        this.router.navigate(['/pages/usuarios']);
      });
  }
}
