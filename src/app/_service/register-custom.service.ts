import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterCustomService {
  private url: string = `http://localhost:8080/auth/register`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  register(
    username: string,
    email: string,
    password: string,
    name: string,
    surname: string,
    country: string,
    state: string,
    city: string,
    imageProfile: string
  ) {
    return this.httpClient.post(this.url, {
      username: username,
      email: email,
      password: password,
      name: name,
      surname: surname,
      country: country,
      state: state,
      city: city,
    });
  }
}
