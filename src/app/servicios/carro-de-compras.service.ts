import { Injectable } from '@angular/core';
import { ProductoInterface } from '../models/ProductoInterface';

@Injectable({
  providedIn: 'root'
})
export class CarroDeComprasService {
  constructor() {}
  private  carritoName = 'carrito';
  public agregarAlCarrito(productoId: string): void {
    // Check if localStorage contains "carrito"
    if (localStorage.getItem(this.carritoName) == null)  {
      // If not
        // Create object with information passed in
        const productoAAgregar: ProductoEnCarrito = new ProductoEnCarrito(productoId, 1);
        // Create carrito object containing previously created object
        const carrito: CarroDeCompras = new CarroDeCompras();
        carrito.productosEnCarrito.push(productoAAgregar);
        // Convert carrito object into JSON string
        const carritoJsonString: string = JSON.stringify(carrito);
        // Store into localStorage
        localStorage.setItem(this.carritoName, carritoJsonString);
      } else {
        // If it does
          let newCarritoString: string;
          const productoAAgregar: ProductoEnCarrito = new ProductoEnCarrito(productoId, 1);
          // Get the JSON string from localStorage
          const carritoString: string = localStorage.getItem(this.carritoName);
          // Convert it into a JSON object with the desired type
          const carritoObject: CarroDeCompras = JSON.parse(carritoString);
          // Add object to the array inside the JSON object
          carritoObject.productosEnCarrito.push(productoAAgregar);
          // Convert JSON object into string
          newCarritoString = JSON.stringify(carritoObject);
          // Store into localStorage
          localStorage.setItem(this.carritoName, newCarritoString);
          console.log(JSON.parse(localStorage.getItem(this.carritoName)));
      }
  }
}

export class CarroDeCompras {
  constructor() {
    this.productosEnCarrito = [];
  }
  productosEnCarrito: ProductoEnCarrito[];
}

export class ProductoEnCarrito {
  constructor(id: string, cantidad: number) {
    this.id = id;
    this.cantidad = cantidad;
  }
  id: string;
  cantidad: number;
}
