import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';


import {
  AngularFirestore
} from 'angularfire2/firestore';
import { ProductoInterface } from '../models/ProductoInterface';
import { ProductoService } from '../servicios/productos.service';
import { CarroDeComprasService } from '../servicios/carro-de-compras.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: ProductoInterface[];
  element: any = 0;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    public afs: AngularFirestore,
    public carroDeComprasService: CarroDeComprasService,
  ) {
  }

  ngOnInit() {
    this.listaProductos();
    // localstorage
  }


  listaProductos() {
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
      // console.log(productos.length);
      // console.log(productos[1]);
      // console.log(productos[0]);
      // console.log(productos[0].nombre);
    });
  }

  // agarrando el id del producto




  // verProductoEnConsola() {
  //   console.log(this.productos);
  // }

  verProducto(idx: number) {
    this.router.navigate(['/productos', idx]);
    // console.log(idx);
  }
}
