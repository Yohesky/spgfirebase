import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

//firebase
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import {UserInterface} from '../modelos/user'
import { async } from '@angular/core/testing';  

//operators
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afsAuth: AngularFireAuth, public afs: AngularFirestore) { }
  

  registerUserEmail(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass).
      then(userData => {
        resolve(userData)
      }).catch(err => console.log((reject(err)))
      )
    })
  }

  async loginEmail(email: string, pass: string){
    return await new Promise ( (resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass).
      then(userData => resolve(userData)).catch(err => reject(err))
    } )
  }

  async loginGoogle(){
    const credentials = await this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth()
  {
    return this.afsAuth.authState.pipe(map(auth => auth ))
  }

  

  usuario(userUid){
    return this.afs.doc<UserInterface>(`usuarios/${userUid}`).valueChanges()
  }
}
