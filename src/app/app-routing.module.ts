import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomComponent } from './pages/layout-custom/layout-custom.component';
import { LoginCustomComponent } from './pages/login-custom/login-custom.component';
import { Not404Component } from './pages/not404/not404.component';
import { RegisterCustomComponent } from './pages/register-custom/register-custom.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  // Probando Custom Login
  {
    path: 'login',
    component: LoginCustomComponent,
  },
  // Probando Custom Login
  {
    path: 'register',
    component: RegisterCustomComponent,
  },

  // Probando Custom NavigationBar
  {
    path: 'pages',
    component: LayoutCustomComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'not-404', component: Not404Component },
  { path: '**', redirectTo: 'not-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
