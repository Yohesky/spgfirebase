import { Component, OnInit } from '@angular/core';

//servicio de autentifacion
import {AuthService} from '../../servicios/auth.service'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public afs: AuthService, public afsAuth: AngularFireAuth) { }
  public app_name: string = 'Smart Process Group'
  public isLogged: boolean = false
  ngOnInit() {
    this.getStateUser()
  }

  getStateUser(){
    this.afs.isAuth().subscribe(auth => {
      if(auth){
        console.log('usuario logeado');
        this.isLogged = true
      }
      else{
        console.log('usuario no logeado');
        this.isLogged = false
      }
    })
  }

  Logout(){
    this.afsAuth.auth.signOut()
  }
}
