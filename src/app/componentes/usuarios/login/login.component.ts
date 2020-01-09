import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servicios/auth.service'

//routes
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  public email: string = ''
  public pass: string = ''
  public msgError: boolean = false

  async loginEmailPass(){
    await this.authService.loginEmail(this.email, this.pass)
    .then( (res) => {
      this.onLoginRedirect()
    } ).catch(err => this.messageError(err))
  }

  loginGoogle(): void{
    this.authService.loginGoogle()
    .then( (res) => {
      this.onLoginRedirect()
    } ).catch(err => this.messageError(err))
  }

  onLoginRedirect(): void{
    this.router.navigate(['usuarios/perfil']);
  }

  messageError(err): void{
     this.msgError = err.message
  }
}
