import { Component, OnInit } from '@angular/core';

//servicio
import {MainServiceService} from '../../servicios/main-service.service'

//ng form
import { NgForm } from '@angular/forms';

//modelos
import {Producto} from '../../modelos/producto'
import { UserInterface } from 'src/app/modelos/user';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public ms: MainServiceService, public afs: AuthService) { }

  

  ngOnInit() {
    this.usuarioActual()
  }


  agregarProducto(productoForm: NgForm): void{
        if(productoForm.value.id == null){
            this.ms.aggProd(productoForm.value)
        }
        else{
          this.ms.actualizarProducto(productoForm.value)
        }

        productoForm.resetForm()
  }



  usuarioActual(){
       this.afs.isAuth().subscribe(auth => {
         if(auth){
           this.ms.selectProducto.by = auth.email
         }
       })
     }
  


}
