import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { RegistroComponent } from './componentes/usuarios/registro/registro.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ProductoDetalladoComponent } from './componentes/producto-detallado/producto-detallado.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'usuarios/login', component: LoginComponent},
  {path: 'usuarios/registro', component: RegistroComponent},
  {path: 'lista-productos', component: ListaProductosComponent},
  {path: 'producto/:id', component: ProductoDetalladoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
