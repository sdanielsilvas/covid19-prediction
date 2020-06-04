import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  login(email: string, password: string, callback) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
       callback(value.user.uid)
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
  
  signup(email: string, password: string) {
    debugger
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        debugger
        console.log('Success!', value);
      })
      .catch(err => {
        debugger
        console.log('Something went wrong:',err.message);
      });    
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
