import { Injectable } from '@angular/core';

//firebase
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Producto} from '../modelos/producto'
import {Observable} from 'rxjs'
import {map, filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(public afs: AngularFirestore) 
  {
    this.productosCollection = afs.collection<Producto>('productos')
    this.productos = this.productosCollection.valueChanges()
  }

  private productosCollection: AngularFirestoreCollection<Producto>
  private productos: Observable<Producto[]>
  private productoDoc: AngularFirestoreDocument<Producto>
  private producto: Observable<Producto>
  public selectProducto: Producto = {
    id: null,
    by: ''

  }


  obtenerProductos()
  {
    return this.productos = this.productosCollection.snapshotChanges().pipe(map((changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Producto
        data.id = action.payload.doc.id
        return data
      })
    })))
  }

  aggProd(producto: Producto){
    console.log(producto);
    
    this.productosCollection.add(producto)
  }

  eliminarProducto(idProducto: string): void{
    this.productoDoc = this.afs.doc<Producto>(`productos/${idProducto}`)
    this.productoDoc.delete()
  }

  actualizarProducto(producto: Producto):void {
    let idProducto = producto.id
    this.productoDoc = this.afs.doc<Producto>(`productos/${idProducto}`)
    this.productoDoc.update(producto)
  }

  //producto Singular
  ObtenerProducto(idProducto: string){
    this.productoDoc = this.afs.doc<Producto>(`productos/${idProducto}`)
    return this.producto = this.productoDoc.snapshotChanges().pipe(map(action => {
      if(action.payload.exists === false){
        return null
      }else{
        const data = action.payload.data() as Producto
        data.id = action.payload.id
        return data
      }
    }))
  }

  filtro(nombre: string){
    let productos = this.producto
    let producto = productos.pipe(filter (item => item.nombre == nombre))
    return producto
  }
  
}
