import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { environment } from '../environments/environment';
import { ProductoService } from './servicios/productos.service';
import { ProductoComponent } from './producto/producto.component';
import { CarroDeComprasComponent } from './carro-de-compras/carro-de-compras.component';
import { CarroDeComprasService } from './servicios/carro-de-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    ProductoComponent,
    CarroDeComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ProductoService, CarroDeComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
