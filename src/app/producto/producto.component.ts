// Para esta vaina usé: https://stackoverflow.com/questions/50634477/angularfire-retrieve-specific-data-from-firebase-database-with-id

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto: any;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.producto = this.productoService
        .getProducto(params['id'])
        .subscribe(i => {
          this.producto = i;
          console.log(this.producto);
        });

      // this.route.params.subscribe(params => {
      //   this.productoService.getObjectById(params['id']).subscribe(i => {
      //     this.producto = i;
      //     console.log(i);

      //   });
      // });
    });
  }
}
