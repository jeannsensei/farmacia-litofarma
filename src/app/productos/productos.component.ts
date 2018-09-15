import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AngularFirestore
} from 'angularfire2/firestore';
import { ProductoInterface } from '../models/ProductoInterface';
import { ProductoService } from '../servicios/productos.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: ProductoInterface[];

  constructor(
    private _productoService: ProductoService,
    private router: Router,
    public afs: AngularFirestore
  ) {}

  ngOnInit() {
    this._productoService.getProductos().subscribe(productos => {
      this.productos = productos;
      // console.log(productos);
    });
  }

  // verProductoEnConsola() {
  //   console.log(this.productos);
  // }

  verProducto(idx: number) {
    this.router.navigate(['/productos', idx]);
    // console.log(idx);
  }
}
