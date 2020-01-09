import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../servicios/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }
  public email: string = ''
  public pass: string = ''
  ngOnInit() {
  }

  registerUserPass(){
    this.authService.registerUserEmail(this.email, this.pass)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {        
        if(user){
          user.updateProfile({
            displayName: ''
          }).then(()=>{
            this.router.navigate(['usuarios/perfil'])
          }).catch((err) => console.log('error', err)
          )
        }
      })
    })
  }

  registerGoogle(): void{
    this.authService.loginGoogle().then((res) => {
      this.onLoginRedirect()
    }).catch(err => this.messageError(err))
  }

  onLoginRedirect(): void{
    this.router.navigate(['usuarios/perfil'])
  }


  messageError(err): void{
    console.log('mensaje de error', err.message);
    
  }
}
