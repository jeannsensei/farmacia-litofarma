import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { ProductoInterface } from '../models/ProductoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productosCollection: AngularFirestoreCollection<ProductoInterface>;
  productos: Observable<ProductoInterface[]>;
  productoDoc: AngularFirestoreDocument<ProductoInterface>;

  constructor(public afs: AngularFirestore) {
    // this.productos = afs.collection('productos').valueChanges();
    this.productosCollection = afs.collection<ProductoInterface>('productos');
  }

  getProductos() {
    return this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductoInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }

  public getProducto(id: string): Observable<{}> {
    // return this.productos;
    return this.afs
      .collection('productos')
      .doc(id)
      .valueChanges();
  }

  // getObjectById(id) {
  //   return this.afs
  //     .collection('productos')
  //     .doc(id)
  //     .valueChanges();
  // }

  addProducto(producto: ProductoInterface): void {
    console.log('NEW PRODUCT');
    this.productosCollection.add(producto);
  }

  deleteProducto(producto: ProductoInterface): void {
    //  console.log('DELETE PRODUCT');
    this.productoDoc = this.afs.doc(`productos/${producto.id}`);
    this.productoDoc.delete();
  }
  updateProducto(producto: ProductoInterface): void {
    //  console.log('UPDATE PRODUCT');
    this.productoDoc = this.afs.doc(`productos/${producto.id}`);
    this.productoDoc.update(producto);
  }
}

