import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, retry, throwError } from 'rxjs';
import { Login } from '../_model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = `http://localhost:8080/auth/login`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(formValues: FormGroup) {
    return this.httpClient.post<Login>(this.url, formValues).pipe(retry(1));
  }

  // Recibire el OBJETO del FORM (type : Login)
  // VER INTERFACES / CLASES de tipo Login.
}
