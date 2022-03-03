import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCustomService } from 'src/app/_service/register-custom.service';
import { CustomValidators } from 'src/app/_validators/custom-validators';

@Component({
  selector: 'app-register-custom',
  templateUrl: './register-custom.component.html',
  styleUrls: ['./register-custom.component.scss'],
})
export class RegisterCustomComponent implements OnInit {
  myForm: FormGroup;
  myError: number = 200;

  constructor(
    private router: Router,
    private registerService: RegisterCustomService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
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
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.notOnlyWhitespace,
      ]),
    });
  }
  // Methods:

  // *** Getters ***
  get username() {
    return this.myForm.get('username');
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get name() {
    return this.myForm.get('name');
  }
  get surname() {
    return this.myForm.get('surname');
  }
  get country() {
    return this.myForm.get('country');
  }
  get state() {
    return this.myForm.get('state');
  }
  get city() {
    return this.myForm.get('city');
  }
  get imageProfile() {
    return this.myForm.get('imageProfile');
  }
  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.registerService.register(this.myForm.value).subscribe({
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
}
