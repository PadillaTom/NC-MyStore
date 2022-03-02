import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { Not403Component } from './not403/not403.component';
import { Not404Component } from './not404/not404.component';
import { LayoutCustomComponent } from './layout-custom/layout-custom.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { LoginCustomComponent } from './login-custom/login-custom.component';
import { RegisterCustomComponent } from './register-custom/register-custom.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
  ],
  exports: [],
  declarations: [
    UsuariosComponent,
    CategoriasComponent,
    HomeComponent,
    Not403Component,
    Not404Component,
    LayoutCustomComponent,
    FeaturedProductsComponent,
    LoginCustomComponent,
    RegisterCustomComponent,
    ProductDetailsComponent,
  ],
  providers: [],
})
export class PagesModule {}
