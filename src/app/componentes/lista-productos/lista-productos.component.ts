import { Component, OnInit } from '@angular/core';

//servicio
import {MainServiceService} from '../../servicios/main-service.service'

//servicio de auntentificacion
import {AuthService} from '../../servicios/auth.service'

//interface 
import {Producto} from '../../modelos/producto'
import {UserInterface} from '../../modelos/user'



import * as printJS from 'print-js'




@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor(public ms: MainServiceService, public afs: AuthService) { }

  p: number = 1
  productos: Producto[];
  confirm = null
  Admin: any = null
  productosJSON: JSON
  //usuarioUid: string = null
  // usuarios: UserInterface = {
  //   email: null
  // }
 
  
  
  ngOnInit() {
    this.obtenerListaProducto()
    //this.usuarioActual()
  }

  obtenerListaProducto()
  {
    this.ms.obtenerProductos().subscribe(producto => {
      
      this.productos = producto
      
    })
  }

  eliminarProducto(idProducto: string): void{
    this.confirm = confirm('¿Deseas eliminar este producto?')
    if(confirm){
      this.ms.eliminarProducto(idProducto)
    }
  }

  preActualizacion(producto: Producto){
    this.ms.selectProducto = Object.assign({}, producto)
  }

  imprimir(){
    
    printJS({printable: this.productos, properties: ['nombre', 'existencia', 'fechaIngreso', 'descripcion', 'precio', 'codigo', 'by'], type: 'json'})
  }
  

  

}
