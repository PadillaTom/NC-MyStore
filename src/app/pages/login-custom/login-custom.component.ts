import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login-custom.service';
import { CustomValidators } from 'src/app/_validators/custom-validators';

@Component({
  selector: 'app-login-custom',
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.scss'],
})
export class LoginCustomComponent implements OnInit {
  myForm: FormGroup;
  myError: number = 200;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9.-]+\\.[a-z]{2,8}$'),
        CustomValidators.notOnlyWhitespace,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
    });
  }

  // Methods:

  // *** Getters ***
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  // Submit:
  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.loginService.login(this.myForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['pages/usuarios']);
      },
      error: (err) => {
        this.myError = err.status;
        setTimeout(() => {
          this.myError = 200;
        }, 3000);
      },
    });
  }

  // TO-DO
  // Formulario como Negrito
  // Me da los atributos, mando el objeto BODY
}
