import { Component, OnInit } from '@angular/core';

import {environment} from 'src/environments/environment';
//import {jwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuario: string;

  constructor() { }

  ngOnInit(): void {
 
  }

}
