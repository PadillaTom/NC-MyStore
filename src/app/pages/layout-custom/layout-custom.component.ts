import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-custom',
  templateUrl: './layout-custom.component.html',
  styleUrls: ['./layout-custom.component.scss'],
})
export class LayoutCustomComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  sidebarToggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
  }
}
