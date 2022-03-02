import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegisterCustomComponent } from './register-custom/register-custom.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
//import { GuardService } from '../_service/guard.service';

export const routes: Routes = [
  // { path: 'inicio', component: InicioComponent, canActivate: [GuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
