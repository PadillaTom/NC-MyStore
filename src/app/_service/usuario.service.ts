import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 
  }
  listar(){
    return this.http.get(`${environment.HOST}/api/usuarios`);
  }
}
