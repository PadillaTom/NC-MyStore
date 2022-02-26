import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  //menus: Menu[]:

  constructor(
    //private menuService: MenuService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.loginService.cerrarSesion();
  }
}
