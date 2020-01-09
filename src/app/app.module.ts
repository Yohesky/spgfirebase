import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';

import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

import { ModalComponent } from './componentes/modal/modal.component'

//variable de conexion firebase
import {environment} from '../environments/environment'

//ngForms
import {FormsModule} from '@angular/forms'


//firebase
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFireAuth} from '@angular/fire/auth'
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductoDetalladoComponent } from './componentes/producto-detallado/producto-detallado.component';
//firebase

//paginacion
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
   
    ListaProductosComponent,

    ModalComponent,
    ProductoDetalladoComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgxPaginationModule,
   
   
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
