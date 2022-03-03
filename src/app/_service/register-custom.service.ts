import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterCustomService {
  private url: string = `http://localhost:8080/auth/register`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  register(formValues: FormGroup) {
    return this.httpClient.post(this.url, formValues).pipe(retry(1));
  }
  // TODO:
  // Recibir el OBJETO del FORM (type : Register)
  // VER INTERFACES / CLASES de tipo Register.
}
