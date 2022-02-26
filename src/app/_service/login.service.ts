import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = `${environment.HOST}/auth/login`;
  //private url: string = `${environment.HOST}/oauth/token`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string) {
    const body = `grant_type=password&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

    return this.http.post(this.url, body, {
      headers: new HttpHeaders()
      .set('contentType', 'application/x-www-form-urlencoded; charset=utf-8')
      .set('Authorization', 'Basic ' 
      + btoa(environment.TOKEN_AUTH_EMAIL + ':' + environment.TOKEN_AUTH_PASSWORD))
    });

  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }



}
