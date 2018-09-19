import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { CarroDeComprasComponent } from './carro-de-compras/carro-de-compras.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductoComponent },
  { path: 'cart', component: CarroDeComprasComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
