import { Component, OnInit } from '@angular/core';

//servicio
import {MainServiceService} from '../../servicios/main-service.service'

//para obtener id
import {ActivatedRoute, Params} from '@angular/router'

//interfaz
import { Producto } from 'src/app/modelos/producto';

@Component({
  selector: 'app-producto-detallado',
  templateUrl: './producto-detallado.component.html',
  styleUrls: ['./producto-detallado.component.css']
})
export class ProductoDetalladoComponent implements OnInit {

  constructor(public ms: MainServiceService, public route: ActivatedRoute) { }

  public producto: Producto = {}

  ngOnInit() {
    const idProducto = this.route.snapshot.params['id']
    this.obtenerDetalles(idProducto)
  }

  obtenerDetalles(idProducto: string): void{
    this.ms.ObtenerProducto(idProducto).subscribe(producto => {
      console.log(producto);
      
      this.producto = producto
    })
  }

}
