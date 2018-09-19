import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-de-compras',
  templateUrl: './carro-de-compras.component.html',
  styleUrls: ['./carro-de-compras.component.css']
})
export class CarroDeComprasComponent implements OnInit {
  producto_nombre: any;
  producto_descripcion: any;
  producto_imagen: any;

  listaFun() {
    this.producto_nombre = JSON.parse(localStorage.getItem('producto_nombre'));
    this.producto_descripcion = JSON.parse(localStorage.getItem('producto_descripcion'));
    this.producto_imagen = JSON.parse(localStorage.getItem('producto_imagen'));

    // localStorage.getItem(this.lista);
    // console.log(typeof JSON.parse(this.lista));
    // console.log(typeof this.lista);
    // JSON.parse(localStorage.getItem('producto_nombre'));
  }

  constructor() {}

  ngOnInit() {
    this.listaFun();
  }

  // funcionTest() {
  //   localStorage.setItem('lista', 'Hello World!');  // It's saved!
  //   let test: string = localStorage.getItem('lista');  // Let's grab it and save it to a variable
  //   console.log(test); //  Logs "Hello World!"
  // }
}
